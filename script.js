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
  // const gameboardSection = document.querySelectorAll(".section");

  const playGame = () => {
    // for (const section of gameboardSection) {
    //   section.addEventListener("click", () => {
    // if (section.textContent == "") {
    gameBoard.addToBoard(section, name);
    name = "";
    // }
    // });
    // }
  };

  return { playGame };
};

const gameLogic = (() => {
  const gameboardSection = document.querySelectorAll(".section");
  let currentPlayer = 1;
  let currentName = "ඞ";

  for (const section of gameboardSection) {
    section.addEventListener("click", () => {
      if (section.textContent == "") {
        Player(section.dataset.id, currentName).playGame();
        if (currentPlayer == 1) {
          currentPlayer = 0;
          currentName = "🔪";
          // console.log(gameBoard.board);
          checkGame();
        } else {
          currentPlayer = 1;
          currentName = "ඞ";
          // console.log(gameBoard.board);
          checkGame();
        }
      }
    });
  }

  function checkGame() {
    //vertical
    if (
      (gameBoard.board[1] == "ඞ" &&
        gameBoard.board[4] == "ඞ" &&
        gameBoard.board[7] == "ඞ") ||
      (gameBoard.board[1] == "🔪" &&
        gameBoard.board[4] == "🔪" &&
        gameBoard.board[7] == "🔪") ||
      (gameBoard.board[0] == "ඞ" &&
        gameBoard.board[3] == "ඞ" &&
        gameBoard.board[6] == "ඞ") ||
      (gameBoard.board[0] == "🔪" &&
        gameBoard.board[3] == "🔪" &&
        gameBoard.board[6] == "🔪") ||
      (gameBoard.board[2] == "ඞ" &&
        gameBoard.board[5] == "ඞ" &&
        gameBoard.board[8] == "ඞ") ||
      (gameBoard.board[2] == "🔪" &&
        gameBoard.board[5] == "🔪" &&
        gameBoard.board[8] == "🔪")
    ) {
      console.log("winner");
    }
    //horizontal
    if (
      (gameBoard.board[0] == "ඞ" &&
        gameBoard.board[1] == "ඞ" &&
        gameBoard.board[2] == "ඞ") ||
      (gameBoard.board[0] == "🔪" &&
        gameBoard.board[1] == "🔪" &&
        gameBoard.board[2] == "🔪") ||
      (gameBoard.board[3] == "ඞ" &&
        gameBoard.board[4] == "ඞ" &&
        gameBoard.board[5] == "ඞ") ||
      (gameBoard.board[3] == "🔪" &&
        gameBoard.board[4] == "🔪" &&
        gameBoard.board[5] == "🔪") ||
      (gameBoard.board[6] == "ඞ" &&
        gameBoard.board[7] == "ඞ" &&
        gameBoard.board[8] == "ඞ") ||
      (gameBoard.board[6] == "🔪" &&
        gameBoard.board[7] == "🔪" &&
        gameBoard.board[8] == "🔪")
    ) {
      console.log("winner");
    }
    //diagonal
    if (
      (gameBoard.board[0] == "ඞ" &&
        gameBoard.board[4] == "ඞ" &&
        gameBoard.board[8] == "ඞ") ||
      (gameBoard.board[0] == "🔪" &&
        gameBoard.board[4] == "🔪" &&
        gameBoard.board[8] == "🔪") ||
      (gameBoard.board[2] == "ඞ" &&
        gameBoard.board[4] == "ඞ" &&
        gameBoard.board[6] == "ඞ") ||
      (gameBoard.board[2] == "🔪" &&
        gameBoard.board[4] == "🔪" &&
        gameBoard.board[6] == "🔪")
    ) {
      console.log("winner");
    }
  }
})();
