function drawChart() {
  var fruits = [
    { name: "Apple", quantity: 40, color: "red" },
    { name: "Orange", quantity: 68, color: "orange" },
    { name: "Banana", quantity: 50, color: "yellow" },
    { name: "Kiwi", quantity: 20, color: "green" },
    { name: "Blueberry", quantity: 25, color: "blue" },
    { name: "Grapes", quantity: 30, color: "purple" },
  ];

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var barHeight = 50; // Height of each bar
  var padding = 20; // Padding between bars
  var maxWidth = 400; // Maximum width for a bar

  // Find the maximum quantity
  var maxQuantity = Math.max(...fruits.map((fruit) => fruit.quantity));

  // Loop through each fruit and draw a bar
  for (var i = 0; i < fruits.length; i++) {
    var fruit = fruits[i];
    var x = 0;
    var y = i * (barHeight + padding); // Starting y-coordinate

    // Calculate the width of the bar based on quantity
    var barWidth = (fruit.quantity / maxQuantity) * maxWidth;

    // Draw the bar
    ctx.fillStyle = fruit.color;
    ctx.fillRect(x, y, barWidth, barHeight);

    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(
      fruit.name + " (" + fruit.quantity + ")",
      20,
      y + barHeight / 2 + 6
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  drawChart();
});
