
//    Rajzolj egy négyzetet [fillRect()].
//    Színezd ki zöldre [fillStyle].
//    Pozícionáld úgy, hogy 10-10 pixelre legyen a canvas jobb alsó sarkától.
//    A négyzet szélességét és magasságát számok helyett változóval add meg 
//      (definiálj korábban például egy size változót).
//    A fillRect() függvény összes paraméterét cseréld le változóra.

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var size = 50;
var dist = 10;
var x = canvas.width - dist - size;
var y = canvas.height - dist - size;

context.fillStyle = 'green';
context.fillRect(x, y, size, size);