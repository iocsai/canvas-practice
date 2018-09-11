function drawCheckeredPattern(row, col) {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    
    var rowHeight = canvas.height / row;
    var colWidth = canvas.width / col;
    var x = y = 0;
    
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            ctx.fillStyle = (i + j) % 2 === 0 ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';
            ctx.fillRect(x, y, colWidth, rowHeight);
            x += colWidth;
        }
        x = 0;
        y += rowHeight;
    }
}

drawCheckeredPattern(8, 8);