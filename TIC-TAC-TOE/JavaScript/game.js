let playerTurn = 0;
//reset Game

function resetGame() {
  let boardIndex = 0;
  playerTurn = 0;
  countRound = 1;
  gameovers.firstElementChild.innerHTML = '<span id="winnerName"></span> win!';
  activeGame.style.display = 'none';
  for (let i = 0; i< 3; i++) {
    for (let j=0; j<3; j++) {
      gameData[i][j] =0;
      boardElements[boardIndex].textContent = "";
      boardElements[boardIndex].classList.remove('X')
      boardElements[boardIndex].classList.remove('O')
      boardIndex++
    }
    
    
  }
}

function startGame() {
  if (players[0].name === "null" || players[1].name === "null") {
    alert("please enter Player Name!");
    return;
  }

resetGame()

  PlayerNameCSS.textContent = players[playerTurn].name;
  container.style.display = "grid";
}


function paintBoard(event) {
  const selectField = event.target;

  const setCol = selectField.dataset.col;
  const setRow = selectField.dataset.row;
  if (gameData[setRow][setCol] > 0) {
    alert("please select empty part");
    return;
  }
  gameData[setRow][setCol] = playerTurn + 1;

  selectField.textContent = players[playerTurn].symbol;
  if (playerTurn === 0) {
    PlayerNameCSS.textContent = players[playerTurn + 1].name;
    selectField.classList.add("X");
    playerTurn++;
  } else {
    PlayerNameCSS.textContent = players[playerTurn - 1].name;
    selectField.classList.add("O");
    playerTurn--;
  }
  const result = checkWinner();
  countRound++

  const winnerName = document.getElementById('winnerName')
 if(result === 1) {
  gameOver()
  winnerName.textContent = players[0].name
 }
 else if (result === 2) {
  gameOver()
  winnerName.textContent = players[1].name
 }
 else if (result === -1) {
  gameOver()
  winnerName.textContent = "nobody";
 }
 console.log(result)
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }
  if (countRound === 9) {
    return -1;
  }
  return 0;
}


//gameover

function gameOver() {
  activeGame.style.display = 'block'
}
