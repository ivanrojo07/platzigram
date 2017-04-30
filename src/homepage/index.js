var page = requiere('page');

page('/', function(ctx, next) {

	var main = document.getElementById('main-container');

	main.innerHTML = '<a href="/signup">Signup</a>'; //diga home
})