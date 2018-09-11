var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;
var cRect = 10;
var dist = 2;
var size = (Math.min(cw, ch) / cRect) + (dist * cRect);

var color = 'rgba(255, 165, 0, .5)';

var x = 0;
var y = 0;

ctx.fillStyle = color;

for (var i = 0; i < cRect; i++) {
    x += size / dist;
    y += size / dist;
    ctx.fillRect(x, y, size, size);
}