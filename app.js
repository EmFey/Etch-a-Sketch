const container = document.querySelector(".container");
const btnAdd = document. querySelector(".growGrid");
const btnReset = document.querySelector(".resetGrid");

btnAdd.addEventListener("click", expandGrid);
btnReset.addEventListener("click", resetGrid);

function createCanvas(rowVcol) {
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
    createCanvas(increase);
}

function resetGrid() {
    container.innerText = "";
    createCanvas(16);
}

createCanvas(16);