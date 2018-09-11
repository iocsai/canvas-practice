var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;

ctx.beginPath();
ctx.moveTo(0, ch / 2);
ctx.lineTo(cw, ch / 2);
ctx.strokeStyle = 'red';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(cw / 2, 0);
ctx.lineTo(cw / 2, ch);
ctx.strokeStyle = 'green';
ctx.stroke();