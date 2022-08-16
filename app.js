const container = document.querySelector(".container")

function createRows(rows, cols) {
    container.style.setProperty('.row', rows);
    container.style.setProperty('.cell', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.textContent = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
};
  
createRows(16, 16);