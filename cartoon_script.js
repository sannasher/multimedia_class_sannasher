// Get the canvas element
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

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

// White fence b/w the water and green ground
ctx.fillStyle = "white";

// green patch where you want to start the fence
var greenX = 0; 
var greenY = canvas.height * 0.65; 
var greenWidth = canvas.width; 
var greenHeight = canvas.height * 0.3; 

// height and spacing of the fence posts
var postHeight = 20; // Height of each fence post
var totalPosts = 10; // Total number of fence posts
var postSpacing = greenWidth / totalPosts; // Calculate the spacing between fence posts

// Draw horizontal line for the top edge of the fence
ctx.fillRect(greenX, greenY, greenWidth, 5); 
// Draw vertical fence posts for the fence
for (var i = 1; i <= totalPosts; i++) {
  var postX = i * postSpacing; //x-cor of the post, greeny is the top of the post
  ctx.fillRect(postX, greenY, 5, postHeight); // Draw each fence post, 5 is the width of the post
}

// Draw white house. I PLAYED AROUND WITH THE MEASUREMENTS 
ctx.fillStyle = "white";
ctx.fillRect(canvas.width * 0.1, canvas.height * 0.3, canvas.width * 0.2, 100); // Main house rectangle
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


// Caption text
ctx.font = "25px Arial";
ctx.fillStyle = "#000033"; // same color as sky
ctx.fillText("My First Cartoon", 10, canvas.height - 10); // 10 px above gound, 10 to the right
