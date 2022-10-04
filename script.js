// makes a grid background
const gridContainer = document.querySelector(".grid-container");

function makeGrid() {
    for (let row = 0; row < 16; row++) {
        for (let column = 0; column < 16; column++) {
            const square = document.createElement("div");
            square.className = 'square';
            gridContainer.appendChild(square);
        }
    }
}

makeGrid();


// modify color of square when mouse is moved over the grid
const changeColor = document.querySelector(".grid-container");

changeColor.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "darkgrey";
});


// send the user a popup asking for the number of squares per side for the new grid
const resetButton = document.querySelector("button");
resetButton.addEventListener("click", resetPage)

function resetPage() {
    let num = prompt("How many squares per side?");
    if (num <= 100) {
        console.log("Great!");
    } else if (num > 100) {
        console.log("Try again");
    }
}