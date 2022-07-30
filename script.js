//gameboard module
const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  const gameboardSection = document.querySelectorAll(".section");

  //take mark from player and adds to borad
  const addToBoard = (mark, player) => {
    board[mark] = player;

    for (const section of gameboardSection) {
      section.textContent = "";
    }
    addToPage();
  };

  //add mark to DOM
  const addToPage = () => {
    for (const section of gameboardSection) {
      section.textContent += board[section.dataset.id];
    }
  };

  return { board, addToBoard };
})();

//player factory function
const Player = (section, name) => {
  //add location of mark and the actual mark
  const playGame = () => {
    gameBoard.addToBoard(section, name);
    name = "";
  };

  return { playGame };
};

//game module
const game = (() => {
  const gameboardSection = document.querySelectorAll(".section");
  const playerNotif = document.querySelector(".playerTurn");
  let currentPlayer = 1;
  let currentName = "ඞ";
  let turn = 0;

  //switch players after their turn and check for game
  for (const section of gameboardSection) {
    section.addEventListener("click", () => {
      if (section.textContent == "") {
        Player(section.dataset.id, currentName).playGame();
        if (currentPlayer == 1) {
          currentPlayer = 0;
          currentName = "🔪";
          playerNotif.textContent = "Player 2 turn";
          turn += 1;
          checkGame();
        } else if (currentPlayer == 0) {
          currentPlayer = 1;
          currentName = "ඞ";
          playerNotif.textContent = "Player 1 turn";
          turn += 1;
          checkGame();
        }
      }
    });
  }

  const winningAxes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkGame() {
    //for each axe in winningAxes, use each number each axe as index of board for matches
    for (let axe of winningAxes) {
      if (
        gameBoard.board[axe[0]] === "ඞ" &&
        gameBoard.board[axe[1]] === "ඞ" &&
        gameBoard.board[axe[2]] === "ඞ"
      ) {
        playerNotif.textContent = `Winner ඞ`;
        currentName = "";
        turn = 10;
      } else if (
        gameBoard.board[axe[0]] === "🔪" &&
        gameBoard.board[axe[1]] === "🔪" &&
        gameBoard.board[axe[2]] === "🔪"
      ) {
        playerNotif.textContent = `Winner 🔪`;
        currentName = "";
        turn = 10;
      } else if (turn == 9) {
        playerNotif.textContent = "draw";
        currentName = "";
      }
    }
  }
})();
