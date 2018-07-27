import { metadata } from "./metadata.js";

const users = new Map;

export function read(textContent) {
    const registers = textContent.split('\n');
    const labels = ["headers", "employerData", "timeRegister", "clockAdjustment", "employeeData", "trailer"]
    const parsedRegisters = {};

    for (const label of labels) {
        parsedRegisters[label] = [];
    }

    for (const register of registers) {

        if (register.substring(0, 9) === '999999999') {
            parsedRegisters.trailer.push(readRegister(registers.pop(), metadata[9]));
            continue;
        }

        let obj = readRegister(register, metadata[0]);
        obj = readRegister(register, metadata[obj.tipo], obj);
        parsedRegisters[labels[obj.tipo - 1]].push(obj);

        treatRecord(obj);
    }

    console.log(parsedRegisters);


    return users;
}

function treatRecord(obj) {
    if (obj.tipo === 5) {
        const user = users.get(obj.employeePIS) || {};
        user.dateTimeRegister = obj.dateTimeRegister;
        user.employeeName = obj.employeeName;
        user.employeePIS = obj.employeePIS;
        user.timeRegisters = user.timeRegisters || new Map;
        users.set(obj.employeePIS, user);
    } else if (obj.tipo === 3) {
        const user = users.get(obj.employeePIS);
        const timeRegister = user.timeRegisters.get(obj.dateRegistered) || [];
        timeRegister.push(obj.timeRegistered);
        user.timeRegisters.set(obj.dateRegistered, timeRegister);
    }
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
        case 'time':
            return `${value.substring(0, 2)}:${value.substring(2, 4)}`;;

        default:
            break;
    }
}