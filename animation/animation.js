//animation.js

// Get the canvas element
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Define animation variables
var characterX = 0; // Initial x-coordinate of the character
var characterY = canvas.height * 0.5; // Initial y-coordinate of the character
var characterSpeed = 2; // Speed at which the character moves horizontally

// Define a function to draw the cartoon character and dialogue box
function drawCharacter() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the background elements (sky, grass, etc.)
  // Dark blue sky
  ctx.fillStyle = "#000033"; // Dark blue
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Circular white moon
  ctx.beginPath();
  ctx.arc(canvas.width * 0.5, canvas.height * 0.1, 30, 0, 2 * Math.PI); // radius of moon is 30
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  // Green grass
  ctx.fillStyle = "green";
  ctx.fillRect(0, canvas.height * 0.4, canvas.width, canvas.height * 0.3);

  // Light blue ocean
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);

  // Stars
  ctx.fillStyle = "white";
  for (var i = 0; i < 10; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height * 0.4;
    ctx.fillRect(x, y, 2, 2); // small white squares for stars
  }

  // White fence between the water and green ground
  ctx.fillStyle = "white";
  ctx.fillRect(0, canvas.height * 0.65, canvas.width, 5); // Horizontal line for the top edge of the fence

  // Draw the white house
  ctx.fillStyle = "white";
  ctx.fillRect(
    canvas.width * 0.1,
    canvas.height * 0.3,
    canvas.width * 0.2,
    100
  ); // Main house rectangle
  // Draw house roof (triangle)
  ctx.beginPath();
  ctx.moveTo(canvas.width * 0.1, canvas.height * 0.3); // Starting point
  ctx.lineTo(canvas.width * 0.2, canvas.height * 0.2); // Top point
  ctx.lineTo(canvas.width * 0.3, canvas.height * 0.3); // Line to the top-right corner of the house
  ctx.closePath();
  ctx.fill();

  // Draw brown front door
  ctx.fillStyle = "brown";
  ctx.fillRect(canvas.width * 0.175, canvas.height * 0.425, 30, 50); // Door

  // Draw brown windows
  ctx.fillRect(canvas.width * 0.125, canvas.height * 0.35, 30, 30); // Window 1
  ctx.fillRect(canvas.width * 0.225, canvas.height * 0.35, 30, 30); // Window 2

  // Draw the cartoon character
  ctx.fillStyle = "yellow";
  ctx.fillRect(characterX, characterY, 50, 50); // Cartoon character (yellow square)

  // Draw dialogue box
  ctx.fillStyle = "white";
  ctx.fillRect(characterX + 60, characterY - 50, 100, 50); // Dialogue box
  ctx.fillStyle = "black";
  ctx.fillText("Hello!", characterX + 70, characterY - 20); // Text inside dialogue box
}

// Animation loop
function animate() {
  // Update character position for animation
  characterX += characterSpeed;

  // Check if the character goes beyond the canvas width, reset its position
  if (characterX > canvas.width) {
    characterX = -50; // Move the character to the left side when it reaches the right side
  }

  // Draw the scene with the updated character position and dialogue box
  drawCharacter();

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();
