function newCoordinates(peaks, incr) {
    for (var i = 0; i < peaks.length; i++) {
        peaks[i] += incr;
    }
}

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;

var triangles = 30;
var dist = 5;
var side = cw / 5;
var x1, y1, x2, y2, x3, y3;
var m = Math.sqrt((side * side) * 3 / 4);
x1 = (cw / 2) - (triangles * dist);
y1 = ((ch - m) / 2) - (triangles * dist / 2);
x2 = x1 + (side / 2);
y2 = y1 + m;
x3 = x2 - side;
y3 = y2;
var peaks = [x1, y1, x2, y2, x3, y3];

ctx.beginPath();

for (var i = 0; i < triangles; i++) {
    ctx.moveTo(peaks[0], peaks[1]);
    ctx.lineTo(peaks[2], peaks[3]);
    ctx.lineTo(peaks[4], peaks[5]);
    ctx.lineTo(peaks[0], peaks[1]);
    newCoordinates(peaks, dist);
}

ctx.strokeStyle = 'royalblue';
ctx.stroke();
