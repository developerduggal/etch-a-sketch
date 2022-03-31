const container = document.querySelector(".container");

createGrid(16); // creating a grid with 256 squares.

// function to create a RGB value.
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string

// function to create a grid based on the number of squares.
function createGrid(num) {
  if(num > 100) {
    window.alert('Oops! You can\'t enter any number greater than 100.') 
  } else {
  for (let i = 0; i < num**2; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    container.appendChild(newSquare);
    newSquare.addEventListener("mouseover", (event) =>
      event.target.setAttribute("style", `background-color: ${rgb}`)
    );
  } }
}

// function to delete the previous grid and create a new one.
function newGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => square.remove());
  createGrid(prompt("Enter the number of squares per side for the new grid.", 16));
}

// adding event listener to the 'New Grid' button.
const newBtn = document.querySelector(".newBtn");
newBtn.addEventListener("click", newGrid);

// function to reset  sketch .
function reset() {
  const squares = document.querySelectorAll(".square");
  return squares.forEach((square) =>
    square.setAttribute("style", "background-color: white")
  );
}

// adding event listener to the 'Reset Grid' button.
const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", reset);