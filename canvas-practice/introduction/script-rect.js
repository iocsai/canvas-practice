// Rajzolj négyszöget, amely kitölti a canvas jobb alsó negyedét. 
// Változtasd meg ezután a canvas méretét a HTML vagy a CSS panelban. 
// A négyszög továbbra is a canvas jobb alsó negyedét töltse ki a változtatás után úgy, 
// hogy a JS panelen nem írsz át semmit.

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.fillStyle = 'gold';
context.fillRect(canvas.width / 2, canvas.height / 2, 
        canvas.width / 2, canvas.height / 2);