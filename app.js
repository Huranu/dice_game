var activePlayer, scores, roundScore;
var isGameOver;
var diceDOM = document.querySelector(".dice");
initGame();
function initGame() {
  isGameOver = false;
  // Toglogchiin eeljiig hadgalah huvisagch ehni toglogch 0,2dh toglogch 1
  activePlayer = 0;

  // Toglogchdiin hadgalsan onoog tsugluulah huvisagch
  scores = [0, 0];

  // Tuhain toglogchiin eeljin deerh onoog hadgalah huvisagch
  roundScore = 0;

  // window.document.querySelector("#score-0").textContent = dice;

  // document.querySelector("#score-1").innerHTML = "<em>Teneg!<em>";

  // programm ehleh
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  //   Toglogchdiin neriig player bolgoh
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.add("active");
  diceDOM.style.display = "none";
}

// roll dice button event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isGameOver !== true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      // dahin shoog hayh
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // toglogchiig eeljiig solih,onoog nemeh
      switchPlayers();
    }
  } else alert("Game Is Over");
});
// hold button event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isGameOver !== true) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    //   onoog 100aas ih esehiig shalgah
    if (scores[activePlayer] >= 20) {
      // game overrr
      isGameOver = true;
      // yalagch textiig nernii orond gargah
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else switchPlayers();
  }
});

function switchPlayers() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // herev active player 0 bol active playeriig 1 bolgo.reverse
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  diceDOM.style.display = "none";
}
// New game button event listener
document.querySelector(".btn-new").addEventListener("click", initGame());
