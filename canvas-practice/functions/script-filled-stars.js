function toRadians (angle) {
    return angle * (Math.PI / 180);
}

function getStarHeight(a) {
    return a * 
            (Math.sqrt(.1 * (5 - Math.sqrt(5))) +
            Math.sqrt(.1 * (25 - 11 * Math.sqrt(5))) +
            .5 * Math.sqrt(.5 * (25 - 11 * Math.sqrt(5)))
    );
}

function getCoordinates(x, y, a) {
    var coords = new Array(10);
    var innerAngle = toRadians(36);
    coords[0] = x;
    coords[1] = y;
    coords[2] = x + a;
    coords[3] = y;
    coords[4] = coords[2] - a * Math.cos(innerAngle);
    coords[5] = coords[3] + a * Math.sin(innerAngle);
    coords[6] = x + a / 2;
    coords[7] = coords[5] - getStarHeight(a);
    coords[8] = coords[6] + a * (Math.sqrt(5) - 1) / 4;
    coords[9] = coords[5];
    return coords;
}

function drawStar(coordinates) {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(coordinates[8], coordinates[9]);
    for (var i = 0; i < coordinates.length; i++) {
        ctx.lineTo(coordinates[i], coordinates[++i]);
    }
    
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.stroke();
    
    ctx.moveTo(coordinates[0] + 1, coordinates[1] + 1);
    ctx.fillStyle = 'rgb(255, 102, 153)';
    ctx.fill();
}

function filledStar(x, y, a) {
    drawStar(getCoordinates(x, y, a));
}

filledStar(40,50,75);
filledStar(130,120,100);
filledStar(250,220,150);