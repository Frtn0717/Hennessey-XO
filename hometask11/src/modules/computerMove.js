import { genRandom } from './genRandom';
import { isWinner } from './isWinner';

export const makeCompMove = () => {
  const cells = [...document.querySelectorAll('.cell-open')];
  let max = cells.length;
  const random = genRandom(max);

  if (cells[random].classList.contains('cell-open')) {
    cells[random].innerHTML = 'O';
    cells[random].classList.toggle('cell-open');
    cells[random].classList.toggle('cell-closed');
    cells[random].classList.toggle('cell-o');
  } else {

    if (!isWinner) {
      makeCompMove();
    }
    
  }
}; 