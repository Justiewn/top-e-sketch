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

createPad();