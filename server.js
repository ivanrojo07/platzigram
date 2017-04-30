var express = require('express');
//define una variable "express" y le damos valor
//require busca en los modules node el del nombre express 
//y nos traera el main
var app = express();
app.set('view engine', 'pug');
//llamar a la función express()

app.use(express.static('public'));
//cualquier usuario puede accedera ella
app.get('/', function(req, res)
{
	res.render('index');
})
//definir una ruta, 

app.listen(3000, function(err)
{
	if(err)return console.log('Hubo un error'), process.exit(1);

	console.log('Platzigram escuchando en el puerto 3000');
})
//lanzar el servidor