import { h1, main } from './variables';

export const showTitle = () => {
  main.appendChild(h1);
  h1.classList.add('heading');
  h1.innerText = 'Tic-Tac-Toe';
}