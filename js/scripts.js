var a = prompt('Podaj podstawe trojkata:'),
    h = prompt('Podaj wysokosc trojkata:');
var triangleArea = a * h / 2;
document.write('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);

var a_canvas = document.getElementById("a");
var context = a_canvas.getContext("2d");

context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 300);
context.lineTo(300, 300);
context.closePath();

context.lineWidth = 10;
context.strokeStyle = '#666666';
context.stroke();

context.fillStyle = "#FFCC00";
context.fill();
