// makes a grid

const gridContainer = document.querySelector(".grid-container");

function makeGrid(num) {
    for (let row = 0; row < num; row++) {
        for (let column = 0; column < num; column++) {
            const square = document.createElement("div");
            square.className = 'square';
            gridContainer.appendChild(square);
        }
    }
}

makeGrid(16);



// modify color of square when mouse is moved over the grid
const changeColor = document.querySelector(".grid-container");

changeColor.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "darkgrey";
});



// send the user a popup asking for the number of squares per side for the new grid
const cell = document.querySelectorAll(".square");
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    for (let i = 0; i < cell.length; i++) {
        gridContainer.removeChild(cell[i]);
    }
    // let userInput = prompt("How many squares per side?");
    // if (userInput >= 1 && userInput <= 100) {
    //     alert("Great!");
    // } else {
    //     alert("Try again");
    // }
});