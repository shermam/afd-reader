import { metadata } from "./metadata.js";

export function read(textContent) {
    const registers = textContent.split('\n');
    const labels = ["headers", "employerData", "timeRegister", "clockAdjustment", "employeeData"]
    const parsedRegisters = {
        trailer: null
    };

    for (const label of labels) {
        parsedRegisters[label] = [];
    }

    // Ignora linha branca no final
    registers.pop();

    parsedRegisters.trailer = readRegister(registers.pop(), metadata[9]);

    for (const register of registers) {
        let obj = readRegister(register, metadata[0]);
        obj = readRegister(register, metadata[obj.tipo], obj);
        parsedRegisters[labels[obj.tipo - 1]].push(obj);
    }

    console.log(parsedRegisters);

}

function readRegister(register, meta, obj) {
    obj = obj || {};
    for (const rule of meta) {
        obj[rule.name] = format(
            rule.type,
            register.substring(rule.from - 1, rule.to)
        );
    }

    return obj;
}

function format(type, value) {
    switch (type) {
        case 'text':
            return value.trim();
        case 'number':
            return Number(value);
        case 'date':
            return `${value.substring(4, 8)}-${value.substring(2, 4)}-${value.substring(0, 2)}`;
        case 'datetime':
            return `${value.substring(4, 8)}-${value.substring(2, 4)}-${value.substring(0, 2)} ${value.substring(8, 10)}:${value.substring(10, 12)}`;;

        default:
            break;
    }
}