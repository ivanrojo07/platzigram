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
var yo = require('yo-yo');
var empty = require('empty-element');

var main = document.getElementById('main-container');

page('/', function(ctx, next) {
	main.innerHTML = '<a href="/signup">Signup</a>'; //diga home
})

page('/signup', function (ctx, next){
	var el = yo`<div class="row">
			<div class="col s10 push-s1">
				<div class="row">
					<div class="col m5 hide-on-small-only">
					<img class="iphone" src="telefono.png">
					</div>
					<div class="col s12 m7">
					<div class="row">
					<div class="signup-box">
						<h1 class="platzigram">Platzigram</h1>
						<form class="signup-form">
						<h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
						<div class="section">
							<a class="btn btn-fb hidden-on-small-only">Iniciar sesión con Facebook</a>
							<a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
						</div>
						<div class="divider"></div>
						<div class="section">
							<input type="email" name="email" placeholder="Correo Electrónico">
							<input type="text" name="name" placeholder="Nombre Completo">
							<input type="text" name="username" placeholder="Contraseña">
							<button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
							</div>
					</div>
						
						</form>
						</div>
							<div class="row">
								<div class="login-box">
							¿Tienes una cuenta? <a href="/signin">Entrar</a>
								</div>
							</div>	
					</div>
				</div>
			</div>
		</div>`;

		empty(main).appendChild(el);
})

//empezar page
page();