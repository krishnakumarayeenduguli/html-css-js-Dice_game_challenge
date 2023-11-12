// Roll dice for Player 1
const player1Number = Math.floor(Math.random() * 6) + 1;
const player1DiceImage = document.querySelector(".img1");
player1DiceImage.setAttribute("src", `./images/dice${player1Number}.png`);

const player2Number = Math.floor(Math.random() * 6) + 1;
const player2DiceImage = document.querySelector(".img2");
player2DiceImage.setAttribute("src", `./images/dice${player2Number}.png`);

if (player1Number > player2Number) {
    document.querySelector("h1").innerHTML = "Player 1 WINS✌️";
} else if (player1Number < player2Number) {
    document.querySelector("h1").innerHTML = "Player 2 WINS✌🏼";

} else {
    document.querySelector("h1").innerHTML = "Match TIED😿";

}