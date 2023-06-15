// Toglogchiin eeljiig hadgalah huvisagch ehni toglogch 0,2dh toglogch 1
var activePlayer = 1;

// Toglogchdiin hadgalsan onoog tsugluulah huvisagch
var scores = [0, 0];

// Tuhain toglogchiin eeljin deerh onoog hadgalah huvisagch
var roundScore = 0;

// Shoonii ali talaar buusniig hadgalah huvisgach 1-6(random)

// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Teneg!<em>";

// programm ehleh
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDOM = document.querySelector(".dice");
diceDOM.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + diceNumber + ".png";
});
