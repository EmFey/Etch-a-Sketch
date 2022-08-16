const container = document.querySelector(".container")

for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";  
    container.appendChild(div);
}

/*function createRows(rows, cols) {
    container.style.setProperty('.row', rows);
    container.style.setProperty('.cell', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      cell.textContent = (i + 1);
      container.appendChild(cell).className = "row";
    };
};
  
createRows(16, 16);*/