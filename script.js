const etchPad = document.querySelector("#etch-div");

let size = 16;

function createPad() {
    etchPad.setAttribute('style', `grid-template-columns: repeat(${size},1fr); \
                    grid-template-rows: repeat(${size},1fr)`);
    for (i = 1; i <= size; i++ ) {
        console.log("hehah");
        for (j = 1; j <= size; j++ ) {
            console.log("hehah")
            let newDiv = document.createElement('div');
            newDiv.setAttribute('style', `grid-area: ${i}/${j}/${i+1}/${j+1}`);
            newDiv.classList.add('pixel');
            etchPad.appendChild(newDiv);
        }
    }
}

function resetPad() {
    while (etchPad.firstChild) {
        etchPad.removeChild(etchPad.lastChild);
    }
    let valueAccepted = false;
    while (!valueAccepted) {
        size = prompt("Speficy size of new pad (must be 100 or lower):");
        if (size <= 100) { valueAccepted = true; }
    }
    createPad();
}

etchPad.addEventListener('mouseover', (e) => {
    const hoveredElement = e.target;
    if (!(hoveredElement.classList.contains('pixel'))) return;
    console.log("what");
    hoveredElement.style.cssText = `background: #${Math.floor(Math.random()*16777215).toString(16)}`;
})

etchPad.addEventListener('transitionend', (e) => {
    const element = e.target;
    if (!(element.classList.contains('pixel'))) return;
    element.style.cssText = `background: white;`;
})

createPad();