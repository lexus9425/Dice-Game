// Generates random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) +1;

// Generates dice image file name
var dice1 = "images/dice" + randomNumber1 + ".png";
var dice2 = "images/dice" + randomNumber2 + ".png";

// Changes dice image to match random number that was generated
document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

// Uses if/else statement to decide winner and changes h1 to display the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}