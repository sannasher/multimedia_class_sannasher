// Define a function to draw the chart
function drawChart() {
  var fruits = [
    { name: "Apple", quantity: 20, color: "red" },
    { name: "Orange", quantity: 10, color: "orange" },
    { name: "Banana", quantity: 15, color: "yellow" },
    { name: "Kiwi", quantity: 5, color: "green" },
    { name: "Blueberry", quantity: 5, color: "blue" },
    { name: "Grapes", quantity: 10, color: "purple" },
  ];

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  // Increase size of bars and padding
  var barHeight = 50; // Height of each bar
  var padding = 20; // Padding between bars

  // Loop through each fruit and draw a bar
  for (var i = 0; i < fruits.length; i++) {
    var fruit = fruits[i];
    var x = 0; // Starting x-coordinate of the bar
    var y = i * (barHeight + padding); // Starting y-coordinate of the bar

    // Draw the bar (increasing width of the bars as well)
    ctx.fillStyle = fruit.color;
    ctx.fillRect(x, y, fruit.quantity * 20, barHeight);

    // Decrease font size and adjust position of fruit name
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(
      fruit.name + " (" + fruit.quantity + ")",
      20,
      y + barHeight / 2 + 6
    );
  }
}

// Call the drawChart function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  drawChart();
});
