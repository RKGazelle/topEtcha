const grid = document.querySelector(".grid");

let gridDivs = [];
let input = 16;
let gridSize = input;
let baseColor = 'white';
let changeColor = 'red';

drawGrid(input);

//Defining the 'Set Grid Size' button

const gridButton = document.querySelector('.gridSize');
gridButton.addEventListener('click', function () {
  clearGrid();
  gridPrompt();
  document.documentElement.style.setProperty('--size', input);
  drawGrid(input);
});

const clearCanvas = document.querySelector(".clearColor")
clearCanvas.addEventListener('click', function() {
  gridDivs.forEach((grid) => {
    grid.style.cssText = `background: ${baseColor}`;
  })
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
      gridDivs[i].style.cssText = `background: ${changeColor}`;
      //document.documentElement.style.setProperty('--baseColor', 'red');
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




