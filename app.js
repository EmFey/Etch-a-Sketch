const container = document.querySelector(".container");
const btnAdd = document. querySelector(".growGrid");
const btnReset = document.querySelector(".resetGrid");

btnAdd.addEventListener("click", expandGrid);
btnReset.addEventListener("click", resetGrid);

function createCanvas(rowVcol) {
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${rowVcol} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${rowVcol} , 1fr)`;

    for (let i = 0; i < (rowVcol * rowVcol); i++) {
        const div = document.createElement('div');
        
        if (i % (rowVcol + 1) === 0) {
            div.style.cssText = "border: 0; height: 0; width: 100%;";
          } else {
            div.classList.add(".container>div");
        }

        div.addEventListener('mouseover', () => { div.classList.add('divHover'); });
        
        container.appendChild(div);
    }
}

function expandGrid() {
    container.innerText = "";
    let increase = Number(prompt("Enter the size of your grid (< 100):"));
    div.style.width = "100%";
    let height = 400 / parseInt(increse);  
    div.style.height = `${height}px`; 
    createCanvas(increase);
}

function resetGrid() {
    container.innerText = "";
    createCanvas(16);
}

createCanvas(16);