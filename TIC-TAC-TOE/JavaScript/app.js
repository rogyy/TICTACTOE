let dataPlayerNum = 0;

const alertMessage = document.getElementById("alert_input");
const enteredInputMessage = document.getElementById("input_userName");

// show overlay window by Clicking 'Edit'

const editButtonSelector_1 = document.getElementById("buttonEdit_1");
const editButtonSelector_2 = document.getElementById("buttonEdit_2");

editButtonSelector_1.addEventListener("click", showOverlay);
editButtonSelector_2.addEventListener("click", showOverlay);

// cancel overlay window by Clicking 'Cancel'

const cancelButtonSelector = document.getElementById("button_cancel");
const inputUserName = document.getElementById("input_userName");

cancelButtonSelector.addEventListener("click", cancelOverlay);

// change playerName by clicking "Chnage"

const formSelector = document.querySelector("form");
const changeSelector = document.getElementById("button_change");

formSelector.addEventListener("submit", changeUserName);

// Save UserName in Javascript

const players = [
  {
    name: "null",
    symbol: "X",
  },
  {
    name: "null",
    symbol: "O",
  },
];

// GameSet in javaScript

const startBtn = document.getElementById("button_start");
const container = document.getElementById("section_game");

startBtn.addEventListener("click", startGame);

// Paint board by Clicking board

const PlayerNameCSS = document.getElementById("CSS_PlayerName");

const boardElements = document.querySelectorAll("#container_9 div");
for (boardElement of boardElements) {
  boardElement.addEventListener("click", paintBoard);
}

// DataSet 

let countRound = 1;


let gameData = 
[
  [0,0,0] ,
  [0,0,0] ,
  [0,0,0]
]




