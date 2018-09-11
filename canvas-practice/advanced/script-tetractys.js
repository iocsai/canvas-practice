var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function triangle(x, y, a, color) {
    var m = Math.sqrt((a * a) * 3 / 4);
    
    ctx.beginPath();

    ctx.moveTo(x, y);
    ctx.lineTo(x + (a / 2), y + m);
    ctx.lineTo(x - (a / 2), y + m);
    ctx.lineTo(x, y);

    ctx.strokeStyle = color;
    ctx.stroke();
    
    ctx.fillStyle = color;
    ctx.moveTo(x, y + m / 2);
    ctx.fill();
}

function tetractys(rows) {
    var m = canvas.height / (rows + 1);
    var a = Math.sqrt((m * m) * (1 + 1 / 3));
    var x = canvas.width / 2;
    var y = m / 2;
    var colors = [
        'rgb(255, 66, 66)',
        'rgb(66, 178, 66)',
        'rgb(0, 178, 128)'];
    for (var i = 1; i <= rows; i++) {
        for (var j = 0; j < i; j++, x += 1.03 * a) {
            triangle(x, y, a, colors[i - 1]);
        }
        y += 1.03 *m;
        x -= 1.03 * ((j * a) + Math.sqrt((m * m) / 3));
    }
}

tetractys(3);