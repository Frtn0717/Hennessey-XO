import { playGame } from './game';
import { main } from './variables';

export const resetGame = () => {
  const resetButton = document.querySelector('.reset');
  const field = document.querySelector('.wrapper');
  const p = document.querySelector('.message');

  resetButton.addEventListener('click', function reset() {

    if (field.hasChildNodes()) {
      while(field.firstChild) {
        field.removeChild(field.firstChild);
      }
    }

    if (field.classList.contains('winner')) {
    field.classList.toggle('winner');      
    }
    if (field.classList.contains('loser')) {
      field.classList.toggle('loser');      
    }
    if (field.classList.contains('draw')) {
      field.classList.toggle('draw');      
    }
    
    

    main.removeChild(p);
    main.removeChild(resetButton);


    playGame();

    resetButton.removeEventListener('click', reset);
  });


}
