const container = document.querySelector(".container");
const btnAdd = document.querySelector(".growGrid");
const btnReset = document.querySelector(".resetGrid");
const btnRandom = document.querySelector(".random");
const btnErasor = document.querySelector(".erase");
const cColor = document.querySelector("#col");

btnAdd.addEventListener("click", expandGrid);
btnReset.addEventListener("click", resetGrid);
btnErasor.addEventListener("click", toggleEraser);
container.addEventListener('mouseover', eraseColor);
//cColor.addEventListener("change", changeColor);

let isErasing = false;

function toggleEraser() {
    isErasing= !isErasing;
    btnErasor.textContent = isEraserEnabled ? "Disable Eraser" : "Enable Eraser";
}

function createCanvas(rowVcol) {
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${rowVcol} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${rowVcol} , 1fr)`;

    for (let i = 0; i < (rowVcol * rowVcol); i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            if (!isErasing) {
              div.classList.add('divHover');
            } else {
              div.classList.add('erasorColors');
            }
        });
        container.insertAdjacentElement("beforeend", div);
    }
}

function expandGrid() {
    container.innerText = "";
    let increase = Number(prompt("Enter the size of your grid (< 100):"));
    createCanvas(increase);
}

function resetGrid() {
    container.innerText = "";
    createCanvas(16);
}

function changeColor() {
    const gridSquares = document.querySelectorAll('.container > div');
    gridSquares.style.backgroundColor = cColor.value;
}

function eraseColor(e) {
    if (isEraserEnabled) {
      e.target.style.backgroundColor = "";
    } else {
      e.target.classList.add("divHover");
    }
}

createCanvas(16);