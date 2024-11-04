const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

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
