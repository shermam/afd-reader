// @ts-check
import { read } from "./afdReader.js";

const fileInput = document.querySelector('input');
let selectedUser = null;

fileInput.addEventListener('change', () => {

    Promise.all(Array.from(fileInput.files).map(readFiles))
        .then(arrayContents => read(arrayContents.join('')))
        .then(renderUsers);
});

function readFiles(file) {
    return new Promise(resolve => {
        const reader = new FileReader;
        reader.onload = _ => resolve(reader.result);
        reader.readAsText(file);
    });
}


function renderUsers(users) {
    const divUsers = document.querySelector('#users');

    const select = `
    <select>
        ${Array.from(users)
            .sort(sortUserArray)
            .map(arr =>
                `<option value="${arr[1].employeePIS}">${arr[1].employeeName}</option>`
            ).join('')}            
    </select>
    `;

    divUsers.innerHTML = select;

    const selectElement = divUsers.querySelector('select');

    selectElement.addEventListener('change', e => {
        selectedUser = users.get(selectElement.value);
        renderTimes();
    });
}

function renderTimes() {
    const divTable = document.querySelector('#table');

    const table = `
        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Horários</th>
                </tr>
            </thead>
            <tbody>
                ${Array.from(selectedUser.timeRegisters)
            .sort(sortTimeRegisters)
            .map(time => `
                <tr>
                    <td>${time[0]}</td>
                    <td>${(time[1] || []).sort(sortString).join(' - ')}</td>
                </tr>
                `).join('')}       
            </tbody>
        </table>
    `;

    divTable.innerHTML = table;
}

function sortString(a, b) {
    return a > b ? 1 : -1;
}

function getName(userArray) {
    return userArray[1].employeeName
}

function sortUserArray(a, b) {
    return sortString(getName(a), getName(b));
}

function sortTimeRegisters(a, b) {
    return sortString(a[0], b[0]);
}