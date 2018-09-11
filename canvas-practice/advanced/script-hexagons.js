var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var a = 50; // length of side, radius of circumcircle
var r = a * Math.sqrt(3) / 2; // radius of incircle 
var x = canvas.width / 2;
var y = canvas.height / 2;
var spacing = 10;

function hexagonCoordinates(x, y, a) {
    var coords = new Array(12);
    coords[0] = x - a;
    coords[1] = coords[7] = y;
    coords[2] = coords[10] = x - a / 2;
    coords[3] = coords[5] = y - r;
    coords[4] = coords[8] = x + a / 2;
    coords[6] = x + a;
    coords[9] = coords[11] = y + r;
    return coords;
}

function drawHexagon(x, y, a) {
    var coordinates = hexagonCoordinates(x, y, a);
    ctx.beginPath();
    ctx.moveTo(coordinates[10], coordinates[11]);
    for (var i = 0; i < coordinates.length; i++) {
        ctx.lineTo(coordinates[i], coordinates[++i]);
    }
    ctx.strokeStyle = 'gold';
    ctx.stroke();
}

function hexagonCenters() {
    var coords = new Array(14);
    var lowSpace = Math.sqrt(3) / 2 * spacing;
    coords[0] = coords[4] = coords[10] = x;
    coords[1] = y;
    coords[2] = coords[8] = x - (lowSpace + Math.sqrt(2) * a);
    coords[3] = coords[7] = y - (spacing / 2 + r);
    coords[5] = y - (spacing + 2 * r);
    coords[6] = coords[12] = x + (spacing + Math.sqrt(2) * a);
    coords[9] = coords[13] = y + (spacing / 2 + r);
    coords[11]  = y + (spacing + 2 * r);
    return coords;
}

coordinates = hexagonCenters();
for (var i = 0; i < coordinates.length; i++) {
    drawHexagon(coordinates[i], coordinates[++i], a);
}

ctx.moveTo(coordinates[8], coordinates[9]);
ctx.fillStyle = 'gold';
ctx.fill();