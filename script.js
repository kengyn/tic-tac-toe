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
    for (let axe of winningAxes) {
      if (
        gameBoard.board[axe[0]] === "ඞ" &&
        gameBoard.board[axe[1]] === "ඞ" &&
        gameBoard.board[axe[2]] === "ඞ"
      ) {
        playerNotif.textContent = `Winner ඞ`;
        currentName = "";
      } else if (
        gameBoard.board[axe[0]] === "🔪" &&
        gameBoard.board[axe[1]] === "🔪" &&
        gameBoard.board[axe[2]] === "🔪"
      ) {
        playerNotif.textContent = `Winner 🔪`;
        currentName = "";
      }
    }
  }
})();
