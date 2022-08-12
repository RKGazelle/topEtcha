const grid = document.querySelector(".grid");

let gridDivs = [];
let input = 16;
let gridSize = input;


drawGrid(input);

const takeInput = document.querySelector('.takeInput');
takeInput.addEventListener('click', function () {
  clearGrid();
  gridPrompt();
  document.documentElement.style.setProperty('--size', input);
  drawGrid(input);
});

function gridPrompt() {
  input = prompt('Input grid size:');

  if (input > 100) {
    alert('Too big! Enter a number 100 or less.')
    gridPrompt();
  } else if (input === null) {
    alert('Error: Resetting grid to default.');
    return 16;
  }

  return input;
}

function drawGrid(size) {

  for(let i = 0; i < size*size; i++) {
    gridDivs[i] = document.createElement('div');
    gridDivs[i].classList.add("gridDiv");
    gridDivs[i].addEventListener('mouseover', () => {
      gridDivs[i].style.cssText = 'background: red';
    })
    grid.appendChild(gridDivs[i]);
  }

  return "Done";
}

function clearGrid() {
  let size = input;
  for(let i = 0; i < size*size; i++) {
    gridDivs[i].remove();
  }
  return "Grid cleared!";
}




