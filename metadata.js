export const metadata = {
    "0": [
        {
            "description": "Sequencial number of the line starting at 0",
            "name": "sequencial",
            "type": "number",
            "from": 1,
            "to": 9,
        },
        {
            "description": "Number indication the type register",
            "name": "tipo",
            "type": "number",
            "from": 10,
            "to": 10,
        },
    ],

    // Header of the file
    "1": [
        {
            "description": "Type of identifier for the employer. '1' for CNPJ and '2' for CPF",
            "name": "employerIdentifierType",
            "type": "number",
            "from": 11,
            "to": 11,
        },
        {
            "description": "Employer CNPJ or CPF",
            "name": "employerIdentifier",
            "type": "text",
            "from": 12,
            "to": 25,
        },
        {
            "description": "Employer CEI",
            "name": "employerCEI",
            "type": "text",
            "from": 26,
            "to": 37,
        },
        {
            "description": "Employer Name",
            "name": "employerName",
            "type": "text",
            "from": 38,
            "to": 187,
        },
        {
            "description": "Initial Date for the records",
            "name": "initialDate",
            "type": "date",
            "from": 205,
            "to": 212,
        },
        {
            "description": "Final Date for the records",
            "name": "finalDate",
            "type": "date",
            "from": 213,
            "to": 220,
        },
        {
            "description": "Date and Time of the file generation",
            "name": "generationDate",
            "type": "datetime",
            "from": 221,
            "to": 232,
        }
    ],

    // Inclusion or alteration of employer data
    "2": [
        {
            "description": "Date and Time of the record",
            "name": "recordDate",
            "type": "datetime",
            "from": 11,
            "to": 22,
        },
        {
            "description": "Type of identifier for the employer. '1' for CNPJ and '2' for CPF",
            "name": "employerIdentifierType",
            "type": "number",
            "from": 23,
            "to": 23,
        },
        {
            "description": "Employer CNPJ or CPF",
            "name": "employerIdentifier",
            "type": "text",
            "from": 24,
            "to": 37,
        },
        {
            "description": "Employer CEI",
            "name": "employerCEI",
            "type": "text",
            "from": 38,
            "to": 49,
        },
        {
            "description": "Employer Name",
            "name": "employerName",
            "type": "text",
            "from": 50,
            "to": 199,
        },
        {
            "description": "Locations of Service",
            "name": "employerLocation",
            "type": "text",
            "from": 200,
            "to": 299,
        }
    ],

    // Time register
    "3": [
        {
            "description": "Time registered by the employee",
            "name": "timeRegistered",
            "type": "datetime",
            "from": 11,
            "to": 22,
        },
        {
            "description": "Employee PIS number",
            "name": "employeePIS",
            "type": "text",
            "from": 23,
            "to": 34,
        },
    ],

    // Clock adjustment register
    "4": [
        {
            "description": "Date and Time before the adjustment",
            "name": "dateTimeBefore",
            "type": "datetime",
            "from": 11,
            "to": 22,
        },
        {
            "description": "Date and Time after the adjustment",
            "name": "dateTimeAfter",
            "type": "datetime",
            "from": 23,
            "to": 34,
        },
    ],

    // Inclusion, alteration or deletion of employee
    "5": [
        {
            "description": "Date and Time of the register",
            "name": "dateTimeRegister",
            "type": "datetime",
            "from": 11,
            "to": 22,
        },
        {
            "description": "Operation type. 'I' for inclusion, 'A' for alteration and 'E' for deletion",
            "name": "operationType",
            "type": "text",
            "from": 23,
            "to": 23,
        },
        {
            "description": "Employee PIS number",
            "name": "employeePIS",
            "type": "text",
            "from": 24,
            "to": 35,
        },
        {
            "description": "Employee Name",
            "name": "employeeName",
            "type": "text",
            "from": 36,
            "to": 87,
        },
    ],

    // Trailer
    "9": [
        {
            "description": "Trailer code",
            "name": "code",
            "type": "number",
            "from": 1,
            "to": 9,
        },
        {
            "description": "Number of type 2 elements",
            "name": "employerData",
            "type": "number",
            "from": 10,
            "to": 18,
        },
        {
            "description": "Number of type 3 elements",
            "name": "timeRegister",
            "type": "number",
            "from": 19,
            "to": 27,
        },
        {
            "description": "Number of type 4 elements",
            "name": "clockAdjustment",
            "type": "number",
            "from": 28,
            "to": 36,
        },
        {
            "description": "Number of type 5 elements",
            "name": "employeeData",
            "type": "number",
            "from": 37,
            "to": 45,
        },
        {
            "description": "Type 9 register",
            "name": "type",
            "type": "number",
            "from": 46,
            "to": 46,
        },
    ],

};