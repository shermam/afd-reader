import { metadata } from "./metadata.js";

export function read(textContent) {
    const registers = textContent.split('\n');

    // Ignora linha branca no final
    registers.pop();

    const trailer = registers.pop();

    console.log(readRegister(trailer, metadata[9]));

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
            return value;
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