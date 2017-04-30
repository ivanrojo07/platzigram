var numeros = [ 400, 200, 1, -23];

var numerosMas1 = numeros.map(function(numero)
{
	return numero +1;
})
var numerosMas2 = numeros.map(n => n+2)

console.log(numerosMas1);
console.log(numerosMas2);