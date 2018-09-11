var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var width = 250;
var height = 175;

var x = (canvasWidth - width) / 2;
var y = (canvasHeight - height) / 2;

context.fillStyle = 'silver';

// A fillRect() függvény rajzol egy négyszöget, és kitölti az éppen aktuális színnel 
// (alapértelmezetten feketével).
// Négy paramétert fogad, sorban ezek: x, y, width, height.
context.fillRect(x, y, width, height);

// begins a path, or resets the current path
context.beginPath();
// moves the path to the specified point in the canvas, without creating a line
context.moveTo(0, 0);
// adds a new point and creates a line TO that point FROM the last specified point 
// in the canvas (this method does not draw the line)
context.lineTo(canvasWidth, canvasHeight);
// sets or returns the color, gradient, or pattern used for strokes
context.strokeStyle = "orange";
// actually draws the path you have defined with all those moveTo() and lineTo() methods
context.stroke();


// drawing the rows
    for (var i = 0; i < row - 1; i++) {
        y += rowHeight;
        ctx.moveTo(x, y);
        ctx.lineTo(canvas.width, y);
    }
    
    // drawing the columns
    y += rowHeight;
    for (var i = 0; i < col - 1; i++) {
        x += colWidth;
        ctx.moveTo(x, y);
        ctx.lineTo(x, 0);
    }