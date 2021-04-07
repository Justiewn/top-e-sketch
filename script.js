const etchPad = document.querySelector("#etch-div");

let size = 16;
let clicked = false;

function createPad() {
    etchPad.setAttribute('style', `grid-template-columns: repeat(${size},1fr); \
                    grid-template-rows: repeat(${size},1fr)`);
    for (i = 1; i <= size; i++ ) {
        for (j = 1; j <= size; j++ ) {
            let newDiv = document.createElement('div');
            newDiv.setAttribute('style', `grid-area: ${i}/${j}/${i+1}/${j+1}`);
            newDiv.classList.add('pixel');
            newDiv.style.cssText = 'background: #FFF;';
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


etchPad.addEventListener('mousedown', (e) => {
    clicked = true;
})

etchPad.addEventListener('mouseup', (e) => {
    clicked = false;
})

etchPad.addEventListener('mouseover', (e) => {
    if (clicked) {
        const hoveredElement = e.target;
        if (!(hoveredElement.classList.contains('pixel'))) return;
        let currentShade = hoveredElement.getAttribute('style','background-color')
        let currentShadee = currentShade.split(': rgb(');
        currentShadee = currentShadee[1].split(', ');
        let newShade = currentShadee[0] - 22.5
        hoveredElement.style.cssText = `background-color: rgb(${newShade},${newShade},${newShade});`;
    }
})

// uncomment for random colors on hover
/* etchPad.addEventListener('mouseover', (e) => {
    const hoveredElement = e.target;
    if (!(hoveredElement.classList.contains('pixel'))) return;
    hoveredElement.style.cssText = `background: #${Math.floor(Math.random()*16777215).toString(16)}`;
})

etchPad.addEventListener('transitionend', (e) => {
    const element = e.target;
    if (!(element.classList.contains('pixel'))) return;
    element.style.cssText = `background: white;`;
}) */

createPad();