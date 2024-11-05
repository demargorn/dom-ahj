const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const boardSize = 16;

for (let i = 0; i < boardSize; i += 1) {
   const cell = document.createElement('div');
   cell.classList.add('cell');
   document.querySelector('.cells').appendChild(cell);
}

const cellsArray = Array.from(document.querySelectorAll('.cell'));
const image = document.createElement('img');
image.src = './public/goblin.png';
let randomIndex;

setInterval(() => {
   const randomNumber = getRandomInt(0, cellsArray.length - 1);
   if (randomNumber === randomIndex) {
      if (randomNumber === cellsArray.length - 1) {
         randomIndex -= 1;
      } else {
         randomIndex += 1;
      }
   } else {
      randomIndex = randomNumber;
   }
   cellsArray[randomIndex].appendChild(image);
}, 1000);
