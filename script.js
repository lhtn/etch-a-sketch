const gridContainer = document.querySelector(".grid-container");
const changeColor = document.querySelector(".grid-container");
const cell = document.querySelectorAll(".square");
const resetButton = document.getElementById("reset-button");

// makes a grid
function makeGrid(gridNumber) {
    const grid = gridNumber * gridNumber;
    for (let i = 0; i < grid; i++) {
        const square = document.createElement("div");
        square.className = 'square';
        gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr) `;
        gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr) `;
        gridContainer.appendChild(square);
    }
}

makeGrid(16);



// modify color of square when mouse is moved over the grid
changeColor.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "darkgrey";
});



// send the user a popup asking for the number of squares per side for the new grid
resetButton.addEventListener("click", () => {
    for (let c = 0; c < cell.length; c++) {
        gridContainer.removeChild(cell[c]);
    }
    let userInput = prompt("How many squares per side?");
    if (userInput >= 1 && userInput <= 100) {
        makeGrid(userInput);
    } else {
        alert("Try again");
    }
});
