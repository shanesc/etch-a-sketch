const container = document.querySelector('.container');
const resetButton = document.querySelector('.btn-reset');

function populateGrid(size) {
  document.documentElement.style.setProperty('--grid-size', size);
  for (let i = 0; i < size ** 2; i++) {
    let square = document.createElement('div');
    square.classList.add('item');
    square.addEventListener('mouseenter', randomColorBackground);
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

function randomColorBackground(e) {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

document.addEventListener('DOMContentLoaded', populateGrid(16));
resetButton.addEventListener('click', resetGrid);