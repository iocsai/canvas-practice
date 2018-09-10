//    Rajzolj egy vörös négyzetet.
//    Rajzolj egy másik vörös négyzetet (ahányszor meghívod a fillRect függvényt, 
//          annyiszor rajzolni fog egy négyzetet).
//    Pozícionáld úgy a két négyzetet, hogy méretük 25%-ában átfedjenek egymással.
//    A második négyzet legyen kék (a fillRect() meghívása előtt változtasd meg a 
//          fillStyle értékét).
//    A két négyzet színe legyen félig átlátszó [rgba()].
//    A fillRect() függvényben csak változókat használj.

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var size = 100;
var dist = size / 2;

var red = 'rgba(255, 0, 0, 0.5)';
var blue = 'rgba(0, 0, 255, 0.5)';

var x = (canvas.width / 2) - (size * 3/4);
var y = (canvas.height / 2) - (size * 3/4);

context.fillStyle = red;
context.fillRect(x, y, size, size);

x += dist;
y += dist;

context.fillStyle = blue;
context.fillRect(x, y, size, size);