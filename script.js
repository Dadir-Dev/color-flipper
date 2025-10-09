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

function changeBackgroundColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = color;
  currentColor.textContent = color;
}

Colorbtn.addEventListener("click", changeBackgroundColor);
