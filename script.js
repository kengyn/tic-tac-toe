const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  const gameboardSection = document.querySelectorAll(".section");

  const addToBoard = (mark, player) => {
    board[mark] = player;

    console.log(board);
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

  return { addToBoard };
})();

const Player = (() => {
  const gameboardSection = document.querySelectorAll(".section");
  for (const section of gameboardSection) {
    section.addEventListener("click", () => {
      if (section.textContent == "") {
        gameBoard.addToBoard(section.dataset.id, "ඞ");
      }
    });
  }
})();

const gameLogic = (() => {})();
