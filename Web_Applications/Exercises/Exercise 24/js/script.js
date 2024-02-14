const button = document.querySelector('button');
const table = document.querySelector('table');
const label = document.querySelector('p');
let counter = 0;

button.addEventListener('click', () => {
    addTableRow();
    counter++;
    labelUpdate();
});

const addTableRow = () => {
    const row = table.insertRow();
    for (let i = 0; i < 7; i++) {
    const col1 = row.insertCell(i);
    let number = Math.floor(Math.random() * 10);
    col1.innerHTML = number;
    }
};

const labelUpdate = () => {
    label.innerHTML = 'Valmiita rivejä: ' + counter;
}

