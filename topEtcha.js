const container = document.querySelector(".container");
let gridDivs = [];
let gridSize = 16;

function drawGrid(size) {

  for(let i = 0; i < size*size; i++) {
    gridDivs[i] = document.createElement('div');
    gridDivs[i].addEventListener('mouseover', () => {
      gridDivs[i].style.cssText = 'background: red';
    })
    // gridDivs[i].textContent = i;
    container.appendChild(gridDivs[i]);
  }


  return "Done";
}


//console.log(drawGrid(gridSize));
drawGrid(gridSize);

