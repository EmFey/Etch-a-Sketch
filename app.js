const container = document.querySelector(".container")



function createCanvas(rowVcol) {
    for (let i = 0; i < (rowVcol * rowVcol); i++) {
        const div = document.createElement('div');
        
        if (i % (rowVcol + 1) === 0) {
            div.style.cssText = "border: 0; height: 0; width: 100%;";
          } else {
            div.classList.add(".container>div");
        } 
        container.appendChild(div);
    }
}
  
createCanvas(16);