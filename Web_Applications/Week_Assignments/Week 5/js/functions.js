const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max ) + min;
};

document.querySelector('#dice').addEventListener('click', () => {
    const randomized_number = getRandomIntNumberInRange(1, 6);
    let diceImage;
  
    if (randomized_number === 1) {
        diceImage = 'img/1.png';
    } else if (randomized_number === 2) {
        diceImage = 'img/2.png';
    } else if (randomized_number === 3) {
        diceImage = 'img/3.png';
    } else if (randomized_number === 4) {
        diceImage = 'img/4.png';
    } else if (randomized_number === 5) {
        diceImage = 'img/5.png';
    } else if (randomized_number === 6) {
        diceImage = 'img/6.png';
    };

    document.querySelector('#dice img').src = diceImage;
});