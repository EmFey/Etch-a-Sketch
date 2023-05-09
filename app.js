const container = document.querySelector(".container");
const colorPicker = document.querySelector("#co");
const btnAdd = document.querySelector(".growGrid");
const btnReset = document.querySelector(".resetGrid");
const btnRandom = document.querySelector(".random");
const btnEraser = document.querySelector(".erase");
let isMouseDown = false;
let currentColor = colorPicker.value;

btnAdd.addEventListener("click", expandGrid);
btnReset.addEventListener("click", resetGrid);
btnEraser.addEventListener("click", toggleEraser);
colorPicker.addEventListener("change", changeColor);

function createCanvas(rowVcol) {
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${rowVcol}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rowVcol}, 1fr)`;

  for (let i = 0; i < rowVcol * rowVcol; i++) {
    const div = document.createElement("div");
    container.insertAdjacentElement("beforeend", div);
  }

  // Add event listeners for painting the divs
  container.addEventListener("mousedown", (event) => {
    isMouseDown = true;
    paintDiv(event.target);
  });

  container.addEventListener("mousemove", (event) => {
    if (isMouseDown) {
      paintDiv(event.target);
    }
  });

  container.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
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

function changeColor(event) {
  currentColor = event.target.value;
}

function toggleEraser() {
  if (btnEraser.classList.contains("active")) {
    btnEraser.classList.remove("active");
  } else {
    btnEraser.classList.add("active");
  }
}

function paintDiv(div) {
  if (btnEraser.classList.contains("active")) {
    div.style.backgroundColor = "";
  } else {
    div.style.backgroundColor = currentColor;
  }
}

createCanvas(16);