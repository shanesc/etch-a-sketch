const container = document.querySelector('.container');

const gridSize = 16;

for (let i = 0; i < gridSize ** 2; i++) {
  let square = document.createElement('div');
  square.classList.add('item');
  square.addEventListener('mouseenter', function() {square.classList.add('item--colored')});
  container.appendChild(square);
}

