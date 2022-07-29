const gameBoard = (() => {
  const board = ["x", "x", "x", "x", "x", "x", "x", "x", "x"];

  const addToBoard = () => {
    const gameboardSection = document.querySelectorAll(".section");
    for (const section of gameboardSection) {
      section.textContent += board[section.dataset.id];
    }
  };

  return { addToBoard };
})();
