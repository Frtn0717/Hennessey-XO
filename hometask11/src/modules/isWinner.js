export const isWinner = () => {
  const cells = [...document.querySelectorAll('.cell')];

  if (
     (
      cells[0].classList.contains('cell-x') && 
      cells[1].classList.contains('cell-x') &&
      cells[2].classList.contains('cell-x')
     )
     ||     
     (
      cells[3].classList.contains('cell-x') &&
      cells[4].classList.contains('cell-x') && 
      cells[5].classList.contains('cell-x')
     )
     ||
     (
      cells[6].classList.contains('cell-x') &&
      cells[7].classList.contains('cell-x') &&
      cells[8].classList.contains('cell-x')
     )
     ||
     (
      cells[0].classList.contains('cell-x') &&
      cells[3].classList.contains('cell-x') && 
      cells[6].classList.contains('cell-x')
     )
     ||
     (
      cells[1].classList.contains('cell-x') && 
      cells[4].classList.contains('cell-x') && 
      cells[7].classList.contains('cell-x')
     )
     ||
     (
      cells[2].classList.contains('cell-x') && 
      cells[5].classList.contains('cell-x') && 
      cells[8].classList.contains('cell-x')
     )
     ||
     (
      cells[0].classList.contains('cell-x') &&
      cells[4].classList.contains('cell-x') && 
      cells[8].classList.contains('cell-x')
     )
     ||
     (
      cells[2].classList.contains('cell-x') &&
      cells[4].classList.contains('cell-x') && 
      cells[6].classList.contains('cell-x')
     )
  ) {
    return 'X';
  }

  if (
    (
      cells[0].classList.contains('cell-o') && 
      cells[1].classList.contains('cell-o') && 
      cells[2].classList.contains('cell-o')
    )
    ||
    (
      cells[3].classList.contains('cell-o') && 
      cells[4].classList.contains('cell-o') && 
      cells[5].classList.contains('cell-o')
    )
    ||
    (
      cells[6].classList.contains('cell-o') && 
      cells[7].classList.contains('cell-o') && 
      cells[8].classList.contains('cell-o')
    )
    ||
    (
      cells[0].classList.contains('cell-o') && 
      cells[3].classList.contains('cell-o') && 
      cells[6].classList.contains('cell-o')
    )
    ||
    (
      cells[1].classList.contains('cell-o') && 
      cells[4].classList.contains('cell-o') && 
      cells[7].classList.contains('cell-o')
    )
    ||
    (
      cells[2].classList.contains('cell-o') && 
      cells[5].classList.contains('cell-o') && 
      cells[8].classList.contains('cell-o')
    )
    ||
    (
      cells[0].classList.contains('cell-o') && 
      cells[4].classList.contains('cell-o') && 
      cells[8].classList.contains('cell-o')
    )
    ||
    (
      cells[2].classList.contains('cell-o') && 
      cells[4].classList.contains('cell-o') && 
      cells[6].classList.contains('cell-o')
    )
  ) {
    return 'O';
  } 
  
  if (cells[0].classList.contains('cell-closed') &&
      cells[1].classList.contains('cell-closed') &&
      cells[2].classList.contains('cell-closed') &&
      cells[3].classList.contains('cell-closed') &&
      cells[4].classList.contains('cell-closed') &&
      cells[5].classList.contains('cell-closed') &&
      cells[6].classList.contains('cell-closed') &&
      cells[7].classList.contains('cell-closed') &&
      cells[7].classList.contains('cell-closed')
  ) {
    return 'draw';
  }

};