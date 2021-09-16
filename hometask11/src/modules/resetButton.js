import { resetGame } from './resetGame';
import { main, button } from './variables';
 
export const resetButton = () => {
  main.appendChild(button);
  button.classList.add('reset');
  button.innerHTML = `Go next!`;

  resetGame();
};