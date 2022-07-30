const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  const gameboardSection = document.querySelectorAll(".section");

  const addToBoard = (mark, player) => {
    board[mark] = player;

    for (const section of gameboardSection) {
      section.textContent = "";
    }

    addToPage();
  };

  const addToPage = () => {
    for (const section of gameboardSection) {
      section.textContent += board[section.dataset.id];
    }
  };

  return { board, addToBoard };
})();

const Player = (section, name) => {
  const playGame = () => {
    gameBoard.addToBoard(section, name);
    name = "";
  };

  return { playGame };
};

const gameLogic = (() => {
  const gameboardSection = document.querySelectorAll(".section");
  const playerNotif = document.querySelector(".playerTurn");
  let currentPlayer = 1;
  let currentName = "ඞ";

  for (const section of gameboardSection) {
    section.addEventListener("click", () => {
      if (section.textContent == "") {
        Player(section.dataset.id, currentName).playGame();
        if (currentPlayer == 1) {
          currentPlayer = 0;
          currentName = "🔪";
          playerNotif.textContent = "Player 2 turn";
          checkGame();
        } else if (currentPlayer == 0) {
          currentPlayer = 1;
          currentName = "ඞ";
          playerNotif.textContent = "Player 1 turn";
          checkGame();
        }
      }
    });
  }

  function checkGame() {
    if (
      //vertical
      (gameBoard.board[1] == "ඞ" &&
        gameBoard.board[4] == "ඞ" &&
        gameBoard.board[7] == "ඞ") ||
      (gameBoard.board[0] == "ඞ" &&
        gameBoard.board[3] == "ඞ" &&
        gameBoard.board[6] == "ඞ") ||
      (gameBoard.board[2] == "ඞ" &&
        gameBoard.board[5] == "ඞ" &&
        gameBoard.board[8] == "ඞ") ||
      //horizontal
      (gameBoard.board[0] == "ඞ" &&
        gameBoard.board[1] == "ඞ" &&
        gameBoard.board[2] == "ඞ") ||
      (gameBoard.board[3] == "ඞ" &&
        gameBoard.board[4] == "ඞ" &&
        gameBoard.board[5] == "ඞ") ||
      (gameBoard.board[6] == "ඞ" &&
        gameBoard.board[7] == "ඞ" &&
        gameBoard.board[8] == "ඞ") ||
      //diagonal
      (gameBoard.board[0] == "ඞ" &&
        gameBoard.board[4] == "ඞ" &&
        gameBoard.board[8] == "ඞ") ||
      (gameBoard.board[2] == "ඞ" &&
        gameBoard.board[4] == "ඞ" &&
        gameBoard.board[6] == "ඞ")
    ) {
      playerNotif.textContent = "Winner ඞ";
      currentName = "";
    } else if (
      //vertical
      (gameBoard.board[1] == "🔪" &&
        gameBoard.board[4] == "🔪" &&
        gameBoard.board[7] == "🔪") ||
      (gameBoard.board[0] == "🔪" &&
        gameBoard.board[3] == "🔪" &&
        gameBoard.board[6] == "🔪") ||
      (gameBoard.board[2] == "🔪" &&
        gameBoard.board[5] == "🔪" &&
        gameBoard.board[8] == "🔪") ||
      //horizontal
      (gameBoard.board[0] == "🔪" &&
        gameBoard.board[1] == "🔪" &&
        gameBoard.board[2] == "🔪") ||
      (gameBoard.board[3] == "🔪" &&
        gameBoard.board[4] == "🔪" &&
        gameBoard.board[5] == "🔪") ||
      (gameBoard.board[6] == "🔪" &&
        gameBoard.board[7] == "🔪" &&
        gameBoard.board[8] == "🔪") ||
      //diagonal
      (gameBoard.board[0] == "🔪" &&
        gameBoard.board[4] == "🔪" &&
        gameBoard.board[8] == "🔪") ||
      (gameBoard.board[2] == "🔪" &&
        gameBoard.board[4] == "🔪" &&
        gameBoard.board[6] == "🔪")
    ) {
      playerNotif.textContent = "Winner 🔪";
      currentName = "";
    }
  }
})();
