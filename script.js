const gridContainer = document.querySelector(".grid-container");
const defaultColors = document.getElementById("default-colors");
const changeOriginalGrid = document.querySelector(".grid-container");
const randomColors = document.getElementById("random-colors");
const makeNewGrid = document.getElementById("new-grid");


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


// modify color of square between light and dark grey when mouse is moved over the grid
changeOriginalGrid.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "darkgrey";
});


defaultColors.addEventListener("click", function (event) {
    let defaultCol = document.querySelector(".grid-container");
    defaultCol.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "darkgrey";
    })
});


// modify color of square by random color when mouse is moved over the grid
randomColors.addEventListener("click", function (event) {
    let random = document.querySelector(".grid-container");
    random.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
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
