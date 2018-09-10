var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(cw, ch);
ctx.moveTo(cw, 0);
ctx.lineTo(0, ch);
ctx.strokeStyle = 'red';
ctx.stroke();