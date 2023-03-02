var mySound;

import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 5

export function update() {

  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
    playSound();
  }
}

function playSound() {
  console.log("Play sound");
  let mySound = new sound("music/cow.mp3");
  mySound.play();

}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}

// Sound consructor
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();

  }
  this.stop = function() {
    this.sound.pause();
  }
}

