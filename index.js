// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor = ''; 
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const display = document.getElementById('keyPressDisplay'); 
  display.textContent = `Key pressed: ${event.key}`; 
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const userInput = document.getElementById('textInput').value;
  document.getElementById('textInputDisplay').textContent = `You typed: ${userInput}`;
}

// Combine Multiple Events

function dynamicInteractions(event) {
  const textInputDisplay = document.getElementById('textInputDisplay');
  const keyPressDisplay = document.getElementById('keyPressDisplay');

  // Change background to green if 'g' is pressed
  if (event.key === 'g' || event.key === 'G') {
    document.body.style.backgroundColor = 'green';
  }

  // Show message if user types "hello"
  if (document.getElementById('textInput').value.toLowerCase() === 'hello') {
    textInputDisplay.textContent = 'You typed: Hello';
  }

  // Display pressed key in real-time
  keyPressDisplay.textContent = `Key pressed: ${event.key}`;
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}