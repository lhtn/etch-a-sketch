const gridContainer = document.querySelector(".grid-container");

function makeGrid() {
    for (let row = 0; row < 16; row++) {
        for (let column = 0; column < 16; column++) {
            let square = document.createElement("div");
            square.className = 'square';
            gridContainer.appendChild(square);
        }
    }
}

makeGrid();