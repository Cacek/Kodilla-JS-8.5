var a = prompt('Podaj a:'),
    b = prompt('Podaj b:');
var value = (a * a) + (2 * a * b) - (b * b);

document.write('Wynik: ' + value);
console.log('Wynik: ' + value);

if (value == 0) {
    document.write('Wynik jest rowny 0');
    console.log('Wynik jest rowny 0');
} else if (value > 0) {
    document.write('Wynik DODATNI');
    console.log('Wynik DODATNI');
} else {
    document.write('Wynik UJEMNY');
    console.log('Wynik UJEMNY');
}
