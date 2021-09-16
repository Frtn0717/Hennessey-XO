import { main, p } from './variables';

export const showMessage = (winner) => {
  main.appendChild(p);
  p.classList.add('message');

  if (winner === 'draw') {
    p.innerText = `It was close. Let's go next?`;
  } else {
    p.innerText = `Congratulation! Player ${winner} wins!`;
  }

};