const etchPad = document.querySelector("#etch-div");

const size = 16;

etchPad.setAttribute('style', `grid-template-columns: repeat(${size},1fr); \
                    grid-template-rows: repeat(${size},1fr)`);

console.log("ssss");

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