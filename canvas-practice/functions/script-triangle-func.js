function triangle(x, y, a) {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    
    var m = Math.sqrt((a * a) * 3 / 4);
    
    ctx.beginPath();

    ctx.moveTo(x, y);
    ctx.lineTo(x + (a / 2), y + m);
    ctx.lineTo(x - (a / 2), y + m);
    ctx.lineTo(x, y);

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.stroke();
    
    ctx.fillStyle = 'rgba(255, 176, 0, 0.5)';
    ctx.moveTo(x, y + m / 2);
    ctx.fill();
}

triangle(230,160,50);
triangle(270,100,50);
triangle(200,50,150);