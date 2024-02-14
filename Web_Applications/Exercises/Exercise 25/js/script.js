const table1 = document.querySelector('table#numbers');
const table2 = document.querySelector('table#extraNumbers');
let drawnNumbers = [];

window.onload = function() {
    drawnNumbers = [];
    addTableRow(table1, 7);
    addTableRow(table2, 2);
};

const addTableRow = (table, numCells) => {
    const row = table.insertRow();
    let numbers = [];
    let number;
    for (let i = 0; i < numCells; i++) {
        do {
            number = Math.floor(Math.random() * 37) + 1;
        } while (drawnNumbers.includes(number));
        drawnNumbers.push(number);
        numbers.push(number);
    }
    numbers.sort((a, b) => a - b);
    numbers.forEach((number) => {
        const cell = row.insertCell();
        cell.innerHTML = number;
    });
};