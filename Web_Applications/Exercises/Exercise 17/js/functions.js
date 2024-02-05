'use strict';

const button = document.getElementById('calculate');

/*const calculate = () => {
    const sek = document.getElementById('sek').value;
    const result = sek * 0.088;
    const eur = document.getElementById('eur');
    eur.innerHTML = result.toFixed(2);
}

button.addEventListener('click', calculate);*/

document.querySelector('button').addEventListener('click', () => {
    const sek = document.querySelector('input').value;
    const result = sek * 0.088;
    const eur = document.querySelector('output');
    eur.innerHTML = result.toFixed(2);
});