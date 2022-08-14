const grid = document.querySelector(".grid");

let gridDivs = [];
let input = 16;
let gridSize = input;
let baseColor = 'white';
let changeColor = 'black';

drawGrid(input);

//Defining the 'Set Grid Size' button

const gridButton = document.querySelector('.gridSize');
gridButton.addEventListener('click', function () {
  clearGrid();
  gridPrompt();
  document.documentElement.style.setProperty('--size', input);
  drawGrid(input);
  clearBGC();
});

//Defining the 'Clear Canvas' button

const clearCanvas = document.querySelector(".clearColor")
clearCanvas.addEventListener('click', clearBGC);

//Defining the Color Picker inputs

const bgcButton = document.querySelector("#bgc");
const ptButton = document.querySelector("#paintc");

bgcButton.addEventListener('change', function() {
  // gridDivs.forEach((grid) => {
  //   if(grid.style.cssText == `background: ${baseColor}`) {
  //     baseColor = this.value;
  //     grid.style.cssText = `backgound: ${baseColor}`;
  //   }
  // });
  baseColor = this.value;
  clearBGC();
});

ptButton.addEventListener('change', function() {
  changeColor = this.value;
});

//Defining the random color checkbox

const randCheck = document.querySelector("#randomColor");

randCheck.addEventListener('change', (e) => {
  if (e.target.checked) {
    gridDivs.forEach((grid) => {
      grid.addEventListener('mouseover', () => {
        grid.style.cssText = `background: ${randRGB()}`;
      });
    });
    // document.getElementById("paintc").disabled=true;
  } else {
    console.log("Unchecked");
    gridDivs.forEach((grid) => {
      grid.addEventListener('mouseover', () => {
        grid.style.cssText = `background: ${changeColor}`;
      });
    });
  }
});


// Functions 

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
    });
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

function clearBGC() {
  gridDivs.forEach((grid) => {
    grid.style.cssText = `background: ${baseColor}`;
  });
}

function randRGB() {
  let r = (Math.random() * (255 - 0) + 0).toFixed(2);
  let g = (Math.random() * (255 - 0) + 0).toFixed(2);
  let b = (Math.random() * (255 - 0) + 0).toFixed(2);
  return `rgb(${r},${g},${b})`;
}

console.log(randRGB());
