var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;

var random = function(max, min) {
  return Math.floor(Math.random()*(max-min+1)+min);
};

function lineToCenter(x, y, color) {
    ctx.beginPath();
    ctx.moveTo(cw / 2, ch / 2);
    ctx.lineTo(x, y);
    ctx.strokeStyle = color;
    ctx.stroke();
}

for (var i = 0; i < 100; i++) {
    lineToCenter(random(cw, 0), random(ch, 0), 'rgb(0, 204, 153)');
}