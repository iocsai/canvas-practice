var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;

var side = cw / 3;
var x1, y1, x2, y2, x3, y3;
var m = Math.sqrt((side * side) * 3 / 4);
x1 = cw / 2;
y1 = (ch - m) / 2;
x2 = x1 + (side / 2);
y2 = y1 + m;
x3 = x2 - side;
y3 = y2;

ctx.beginPath();

ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.lineTo(x3, y3);
ctx.lineTo(x1, y1);

ctx.strokeStyle = 'red';
ctx.stroke();

ctx.moveTo(cw / 2, ch / 2);
ctx.fillStyle = 'khaki';
ctx.fill();