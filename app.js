const container = document.querySelector(".container");
const btn = document. querySelector('.growGrid');

btn.addEventListener("click", expandGrid);

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
    let increase = Number(prompt("Enter the size of your grid (< 100):"));
    createCanvas(increase);
}

createCanvas(16);