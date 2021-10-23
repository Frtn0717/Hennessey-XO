import { makeCompMove } from "./computerMove";
import { isFull } from "./isFull";
import { isWinner } from "./isWinner";
import { showMessage } from "./message";
import { resetButton } from "./resetButton";

export const makeMove = () => {
  const field = document.querySelector('.wrapper'); 

  field.addEventListener('click', function markIt(event) {
    const target = event.target;
    
    if (target.classList.contains('cell-open')) {
      target.innerHTML = 'X';
      target.classList.toggle('cell-open');
      target.classList.toggle('cell-closed');
      target.classList.toggle('cell-x');

      if (!isFull()) {
        makeCompMove();
      }

      if(isWinner()) {
        if(isWinner() === 'X') {
          field.classList.add('winner');
        }
        if(isWinner() === 'O') {
          field.classList.add('loser');
        }
        if(isWinner() === 'draw') {
          field.classList.add('draw');
        }
        showMessage(isWinner());
        resetButton();
        field.removeEventListener('click', markIt);
      }

    }
  });
};
