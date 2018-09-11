function newColor(hue, saturation, lightness, alpha) {
    return 'hsla(' + hue + ',' + saturation + '%,' + lightness + '%,' + alpha + ')';
}

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;
var cRect = 17;
var dist = 10;
//var size = (Math.min(cw, ch) / cRect) - (dist + 1);

var hue = 360;
var saturation = 50;
var lightness = 45;
var alpha = 1;

var x = 0;
var y = 0;

for (var i = 0; i < cRect; i++) {
    ctx.fillStyle = newColor(hue, saturation, lightness, alpha);
    ctx.fillRect(x, y, cw, ch);
    x += dist;
    y += dist;
    cw -= 2* dist;
    ch -= 2 * dist;
    hue -= 360/17;
}

