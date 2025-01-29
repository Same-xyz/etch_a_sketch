// Constants
document.addEventListener("DOMContentLoaded", () => {
    // Constants
    const container = document.querySelector(".container");
    const resizeButton = document.querySelector("#resizeButton");
    const MAX_GRID_SIZE = 100;
    const CONTAINER_SIZE = 600;

    let selectedColor = "";
    
    const colourPicker = document.getElementById("colourPicker");
    colourPicker.addEventListener("input", () => {
        const currentColor = document.getElementById("currentColor");
        currentColor.textContent = colourPicker.value;
        selectedColor = colourPicker.value;
        console.log("selected color:", selectedColor);
    });

// Function to create the grid
function createGrid(size) {
    // Clear the existing grid
    container.innerHTML = "";
  
    // Calculate the size of each square
    const squareSize = 600 / size;
  
    // Create the grid squares
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      // Add hover effect
      changeColor(square);
      container.appendChild(square);
    }
  }
  
  // Function to generate a random RGB color
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
//Function to progressively darken a square
  function changeColor(square) {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = selectedColor ? selectedColor: getRandomColor();
      });
  
    const currentOpacity = parseFloat(square.style.opacity) || 0;
    if (currentOpacity < 1) {
      square.style.opacity = currentOpacity + 0.2;
    }
  }
  
  // Function to prompt the user for a new grid size
  function resizeGrid() {
    let newSize = prompt("Enter the number of squares per side (max 100):");
    newSize = parseInt(newSize);
  
    if (newSize > 0 && newSize <= MAX_GRID_SIZE) {
      createGrid(newSize);
    } else {
      alert("Please enter a valid number between 1 and 100.");
    }
  }
  
  // Event listener for the resize button
  resizeButton.addEventListener("click", resizeGrid);
  
  // Initialize the grid with a default size of 16x16
  createGrid(16);

});
