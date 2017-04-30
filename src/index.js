//var numeros = [ 400, 200, 1, -23];

//var numerosMas1 = numeros.map(function(numero)
//{
//	return numero +1;
//})
//var numerosMas2 = numeros.map(n => n+2)

//console.log(numerosMas1);
//console.log(numerosMas2);

//utilizando page.js
var page = require('page');

var main = document.getElementById('main-container');

page('/', function(ctx, next) {
	main.innerHTML = 'Home <a href="/signup">Signup</a>'; //diga home
})

page('/signup', function (ctx, next){
	main.innerHTML = 'Signup <a href="/">Home</a>'; //diga signup
})

//empezar page
page();