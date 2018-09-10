var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var a = 250;
var b = 50;
var cw = canvas.width;
var ch = canvas.height;

var red = 'rgba(255, 0, 0, 1)';
var white = 'rgba(255, 255, 255, 1)';
var green = 'rgba(0, 255, 0, 1)';

var x = (cw - a) / 2;
var y = (ch - 3 * b) / 2;

context.fillStyle = red;
context.fillRect(x, y, a, b);

y += b;

context.fillStyle = white;
context.fillRect(x, y, a, b);

y += b;

context.fillStyle = green;
context.fillRect(x, y, a, b);