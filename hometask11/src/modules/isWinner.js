export const isWinner = () => {
  const cells = [...document.querySelectorAll('.cell')];
  const winnerComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const x = winnerComb.some(arr => {
    return arr.every(i => {
      return cells[i].classList.contains('cell-x') === true;
    })
  });

  const o = winnerComb.some(arr => {
    return arr.every(i => {
      return cells[i].classList.contains('cell-o') === true;
    })
  });

  const draw = cells.every(cell => cell.classList.contains('cell-closed'));

  if (x) {
    return 'X'
  } else if (o) {
    return 'O'
  }

  if (draw) {
    return 'draw';
  };

};