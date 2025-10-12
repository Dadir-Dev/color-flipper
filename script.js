// ----- Color Generation ------

// DOM elements

// Get the element that triggers the color change
const colorBtn = document.getElementById("btn");

// Get the element that displays current color
const currentColor = document.querySelector(".current-color");

// Get mode toggle button
const simpleBtn = document.getElementById("simple");
const hexBtn = document.getElementById("hex");

// Get container for color history
const colorHistory = document.getElementById("colorHistory");

// Array of simple color names
const colorNames = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "Blue",
  "BlueViolet",
  "Brown",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "CornflowerBlue",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGreen",
  "DarkMagenta",
  "DarkRed",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DodgerBlue",
  "FireBrick",
  "Fuchsia",
  "Gold",
  "Gray",
  "Green",
  "Indigo",
  "Lavender",
  "LightBlue",
  "Lime",
  "Magenta",
  "Navy",
  "Orange",
  "Pink",
  "RebeccaPurple",
  "Red",
  "Silver",
  "Teal",
  "Tomato",
  "Turquoise",
  "Violet",
  "Yellow",
];

// For the hex mode, we will generate random hex code
// No array needed - we will create them on the fly

// function to generate random hex color
function getRandomHex() {
  // Hex characters: 0-9 and A-F
  const hexChars = "0123456789ABCDEF";

  // create 6 random hex characters
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * hexChars.length)];
  }

  return color;
}

function getRandomSimpleColor() {
  // Pick random color from simpleColors array
  const randomIndex = Math.floor(Math.random() * colorNames.length);
  return colorNames[randomIndex];
}

// ----- User Interface Updates ------

let isHexMode = false; // default mode is simple colors
function changeBackgroundColor() {
  let newColor;
  // check current mode and get appropriate color
  if (isHexMode) {
    newColor = getRandomHex();
  } else {
    newColor = getRandomSimpleColor();
  }
  // Apply the color to the background
  document.body.style.backgroundColor = newColor;

  // update the color display text
  currentColor.textContent = newColor;

  // Add to color history
  addToHistory(newColor);
}

function switchToSimpleMode() {
  isHexMode = false;
  simpleBtn.classList.add("active");
  hexBtn.classList.remove("active");
  changeBackgroundColor(); // This is optional, makes the change immediate
}

function switchToHexMode() {
  isHexMode = true;
  simpleBtn.classList.remove("active");
  hexBtn.classList.add("active");
  changeBackgroundColor(); // This is optional, makes the change immediate when switching modes
}

// Implement color history
const colorHistoryArray = [];

function addToHistory(color) {
  // Add color to beginning of array
  if (!colorHistoryArray.includes(color)) {
    colorHistoryArray.unshift(color);
  }

  // Keep only the last 10 colors
  if (colorHistoryArray.length > 10) {
    colorHistoryArray.pop();
  }
  updateHistoryDisplay();
  // console.log(colorHistoryArray);
}

function updateHistoryDisplay() {
  colorHistory.innerHTML = "";
  // Create a color chip for each color in the history
  colorHistoryArray.forEach((color) => {
    const colorChip = document.createElement("div"); // create a new div
    colorChip.className = "color-chip"; // assign class for styling
    colorChip.style.backgroundColor = color; // set background color
    colorChip.title = color; // set tooltip text
    colorHistory.appendChild(colorChip); // add to history container

    colorChip.addEventListener("click", () => {
      document.body.style.backgroundColor = color;
      currentColor.textContent = color;
    });
  });
}

// ----- Event Listeners ------

colorBtn.addEventListener("click", () => {
  changeBackgroundColor();
  console.log("Button clicked!");
});
simpleBtn.addEventListener("click", () => {
  if (isHexMode) {
    switchToSimpleMode();
  }
});
hexBtn.addEventListener("click", () => {
  if (!isHexMode) {
    switchToHexMode();
  }
});

changeBackgroundColor(); // Initial color on page load
