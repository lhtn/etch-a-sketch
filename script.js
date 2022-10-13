const gridContainer = document.querySelector(".grid-container");
const originalGridColor = document.querySelector(".grid-container");
const changeToDefault = document.getElementById("default-color");
const changeToRandom = document.getElementById("random-color");
const makeNewGrid = document.getElementById("new-grid");
const eraser = document.getElementById("eraser");


// makes a grid
function makeGrid(gridNumber) {
    let grid = gridNumber * gridNumber;
    for (let i = 0; i < grid; i++) {
        const square = document.createElement("div");
        square.className = 'square';
        gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr) `;
        gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr) `;
        gridContainer.appendChild(square);
    }
}

makeGrid(16);


// modify color of square to dark grey when mouse is moved over the grid
originalGridColor.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "darkgrey";
});


// modify color of square from color to dark grey when mouse is moved over the grid
changeToDefault.addEventListener("click", function (event) {
    let defaultColor = document.querySelector(".grid-container");
    defaultColor.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "darkgrey";
    })
});


// modify color of square by random color when mouse is moved over the grid
changeToRandom.addEventListener("click", function (event) {
    let randomCol = document.querySelector(".grid-container");
    randomCol.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    })
})


// erase color of square to light grey
eraser.addEventListener("click", function (event) {
    let eraseSquare = document.querySelector(".grid-container");
    eraseSquare.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "lightgrey";
    })
})


// send the user a popup asking for the number of squares per side for the new grid
makeNewGrid.addEventListener("click", () => {
    let userInput = prompt("How many squares per side?");
    if (userInput > 1 && userInput <= 100) {
        let cell = document.querySelectorAll(".square");
        for (let c = 0; c < cell.length; c++) {
            gridContainer.removeChild(cell[c]);
        }
        makeGrid(userInput);
    } else {
        alert("Choose a number greater than 1 and less than 100");
    }
});
