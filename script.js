// DOM elements

// Get the element that triggers the color change
const Colorbtn = document.getElementById("btn");

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
    color += hexChars[Math.floor(Math.random() * 16)];
  }

  console.log(color);
  return color;
}

function getRandomSimpleColor() {
  // Pick random color from simpleColors array
  const randomIndex = Math.floor(Math.random() * colorNames.length);
  return colorNames[randomIndex];
}

function changeBackgroundColor() {
  let newColor;
  let isHexMode = false;
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
}

Colorbtn.addEventListener("click", changeBackgroundColor);
