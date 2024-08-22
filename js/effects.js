// Create a canvas element and add it to the document body
var canvas = document.body.appendChild(document.createElement('canvas')),
    context = canvas.getContext('2d'); // Get the 2D drawing context
context.globalCompositeOperation = 'lighter'; // Use lighter blend mode for overlapping colors
canvas.width = 1800; // Set canvas width
canvas.height = 90;  // Set canvas height

// Array of characters used in the text strips
var textStrip = ['1', '0', '1','0', '1', '0','s', 'p', 'c','s', 'p', 'c'];
var stripCount = 60; // Number of text strips
var stripX = new Array(stripCount); // Array to store X positions of strips
var stripY = new Array(stripCount); // Array to store Y positions of strips
var dY = new Array(stripCount); // Array to store the vertical speed of each strip
var stripFontSize = new Array(stripCount); // Array to store the font size of each strip

// Initialize positions, speeds, and font sizes for each strip
for (var i = 0; i < stripCount; i++) {
    stripX[i] = Math.floor(Math.random() * (canvas.width - 20)); // Random X position
    stripY[i] = -100; // Start position above the canvas
    dY[i] = Math.floor(Math.random() * 7) + 3; // Random speed between 3 and 9
    stripFontSize[i] = Math.floor(Math.random() * 16) + 8; // Random font size between 8px and 24px
}

// Array of colors for the text characters
var theColors = ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'];

// Function to draw a single text strip at position (x, y)
function drawStrip(x, y) {
    for (var k = 0; k <= 20; k++) {
        var randChar = textStrip[Math.floor(Math.random() * textStrip.length)]; // Pick a random character
        if (context.fillText) {
            // Set the color of the text based on the position in the strip
            switch (k) {
                case 0:
                    context.fillStyle = theColors[0]; break;
                case 1:
                    context.fillStyle = theColors[1]; break;
                case 3:
                    context.fillStyle = theColors[2]; break;
                case 7:
                    context.fillStyle = theColors[3]; break;
                case 13:
                    context.fillStyle = theColors[4]; break;
                case 17:
                    context.fillStyle = theColors[5]; break;
            }
            context.fillText(randChar, x, y); // Draw the character
        }
        y -= stripFontSize[k]; // Move up for the next character in the strip
    }
}

// Main draw function to update and render the canvas
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    context.shadowOffsetX = context.shadowOffsetY = 0; // No shadow offset
    context.shadowBlur = 8; // Set shadow blur
    context.shadowColor = '#0000FF'; // Set shadow color

    // Loop through each strip and update its position
    for (var j = 0; j < stripCount; j++) {
        context.font = stripFontSize[j] + 'px MatrixCode'; // Set font size and style
        context.textBaseline = 'top'; // Align text at the top
        context.textAlign = 'center'; // Center the text horizontally

        // If the strip has moved off the bottom of the canvas, reset it
        if (stripY[j] > canvas.height) {
            stripX[j] = Math.floor(Math.random() * (canvas.width - 20)); // New random X position
            stripY[j] = -100; // Reset Y position above the canvas
            dY[j] = Math.floor(Math.random() * 7) + 3; // New random speed
            stripFontSize[j] = Math.floor(Math.random() * 16) + 8; // New random font size
            drawStrip(stripX[j], stripY[j]); // Draw the strip
        } else {
            drawStrip(stripX[j], stripY[j]); // Continue drawing the strip at its current position
        }

        stripY[j] += dY[j]; // Move the strip down by its speed
    }
    setTimeout(draw, 70); // Call draw function again after 70ms for animation
}

// Start the animation
draw();
