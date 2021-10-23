import { showTitle } from "./header";
import { makeField } from "./makeField";
import { makeMove } from "./makeMove";
// import { resetGame } from "./resetGame";



export const playGame = () => {
  showTitle();
  makeField();
  makeMove();

};

// window.onload = playGame();