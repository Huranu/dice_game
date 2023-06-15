// Toglogchiin eeljiig hadgalah huvisagch ehni toglogch 0,2dh toglogch 1
var activePlayer = 1;

// Toglogchdiin hadgalsan onoog tsugluulah huvisagch
var scores = [0, 0];

// Tuhain toglogchiin eeljin deerh onoog hadgalah huvisagch
var roundScore = 0;

// Shoonii ali talaar buusniig hadgalah huvisgach 1-6(random)
var dice = Math.floor(Math.random() * 6) + 1;

// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Teneg!<em>";

// programm ehleh
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";

console.log("shoo:" + dice);
