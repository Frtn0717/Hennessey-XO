import { div, main } from './variables';

export const makeField = () => {
  const wrap = main.appendChild(div);
  wrap.classList.add('wrapper');

  const wrapper = document.querySelector('.wrapper');
  
  for (let i = 0; i < 9; i++) {     
    const cell = document.createElement('div');
    
    wrapper.append(cell);
   
    cell.classList.add('cell');
    cell.classList.add(`cell-${i}`);

    // cell.innerHTML = `X`;
  };
};