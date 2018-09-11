var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;
var dist = 3;

for (var x = 0; x <= cw; x += dist) {
    ctx.moveTo(x, ch / 2);
    ctx.lineTo(cw / 2, (x % 2 === 0) ? 0 : ch);
}

ctx.strokeStyle = 'red';
ctx.stroke();