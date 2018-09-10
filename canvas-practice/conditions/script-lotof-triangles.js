var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;
var x, y;

for (var i = 0; i <= cw; i++) {
    ctx.moveTo(cw / 2, i);
    x = (i % 4 === 0 || i % 4 === 1) ? 0 : cw;
    y = (i % 2 === 0) ? 0 : ch;
    ctx.lineTo(x, y);
}

ctx.strokeStyle = 'blue';
ctx.stroke();