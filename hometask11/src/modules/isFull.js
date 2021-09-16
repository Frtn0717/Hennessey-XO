export const isFull = () => {
  const cells = [...document.querySelectorAll('.cell-open')];

  if (cells.length === 0) {
    return true;
  } else {
    return false;
  }

}