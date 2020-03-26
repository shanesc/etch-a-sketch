const container = document.querySelector('.container');
const resetButton = document.querySelector('.btn-reset');

function populateGrid(size) {
  document.documentElement.style.setProperty('--grid-size', size);
  for (let i = 0; i < size ** 2; i++) {
    let square = document.createElement('div');
    square.classList.add('item');
    square.addEventListener('mouseenter', function() {square.classList.add('item--colored')});
    container.appendChild(square);
  }
}

function removeAllChildElements(parent) {
  while(parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }
}

function resetGrid() {
  let size = +prompt('What size grid? (16 - 64)', 16);

  if (size < 16) {
    size = 16;
  } else if (size > 64) {
    size = 64;
  }

  removeAllChildElements(container);
  populateGrid(size);
}

document.addEventListener('DOMContentLoaded', populateGrid(16));
resetButton.addEventListener('click', resetGrid);