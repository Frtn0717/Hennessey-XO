export const isFull = () => {
  const cells = [...document.querySelectorAll('.cell-open')];

  return cells.length === 0 ? true : false;

}