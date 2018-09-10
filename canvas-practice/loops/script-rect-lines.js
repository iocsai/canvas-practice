var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;
var cRect = 5;
var dist = 5;
var size = (Math.min(cw, ch) / cRect) - (dist + 1);

var color = 'rgba(255, 165, 0, .5)';

var x = dist;
var y = dist;

ctx.fillStyle = color;

for (var i = 0; i < cRect; i++) {
    for (var j = 0; j <= i; j++) {
        ctx.fillRect(x, y, size, size);
        x += size + dist;
    }
    x = dist;
    y += size + dist;
}