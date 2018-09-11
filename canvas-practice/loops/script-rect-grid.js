function newColor(red, green, blue) {
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;
var cRect = 5;
var dist = 5;
var size = (Math.min(cw, ch) / cRect) - (dist + 1);

var red = 199;
var green = 79;
var blue = 120;

var x = dist;
var y = dist;

for (var i = 0; i < cRect; i++) {
    ctx.fillStyle = newColor(red, green, blue);
    for (var j = 0; j < cRect; j++) {
        ctx.fillStyle = newColor(red, green, blue);
        ctx.fillRect(x, y, size, size);
        x += size + dist;
        red -= 7;
    }
    x = dist;
    y += size + dist;
    blue += 15;
}

