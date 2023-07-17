var randomNumber1 = Math.random() * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);
console.log(randomNumber1);

var randomNumber2 = Math.random() * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);
console.log(randomNumber2);

var img = "dice" + randomNumber1 + ".png";
var img2 = "dice" + randomNumber2 + ".png";

var leftDice = document
  .querySelector(".img1")
  .setAttribute("src", "images/" + img);
console.log(leftDice);

var rightDice = document
  .querySelector(".img2")
  .setAttribute("src", "images/" + img2);
console.log(rightDice);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "player 1 won";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "player 2 won";
} else {
  document.querySelector("h1").textContent = "draw!!";
}
