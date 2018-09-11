var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;
var cRect = 15;
var dist = 20;
var side = 45;

var x = 15;
var y = 15;

var color;
var base = 'rgba(0,0,0,0.5)';
var foo = 'rgba(0,0,255,0.5)';
var bar = 'rgba(255,255,0,0.5)';
var foobar = 'rgba(0,255,0,0.5)';

for (var i = 1; i <= cRect; i++) {
    color = base;
    if (i % 3 === 0) {
        color = foo;
    } 
    if (i % 5 === 0) {
        color = bar;
        if (i % 3 === 0) {
            color = foobar;
        }
    } 
    ctx.fillStyle = color;
    ctx.fillRect(x, y, side, side);
    x += dist;
    y += dist;
}