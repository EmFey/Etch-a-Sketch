const container = document.querySelector(".container")
let i=0, n=16;

container.innerHTML =  `<div class="row">${'<div class="cell">X</div>'.repeat(n)}</div>`.repeat(n).replace(/X/g,_=> (i++).toString(n) );