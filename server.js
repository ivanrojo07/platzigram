var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Platzigram' });
})

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Platzigram - Signup' });
})

app.get('/signin', function (req, res) {
  res.render('index', { title: 'Platzigram - Signin' });
})

app.get('/api/pictures', function (req, res, next) {
  var pictures = [
    {
      user: {
        username: 'ivanrojo07',
        avatar: 'https://scontent.fmex2-1.fna.fbcdn.net/v/t31.0-8/s960x960/18216488_10211111333132215_5855043206715828785_o.jpg?oh=53c005bb77e5668d37441d304f750738&oe=5984B8A1'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'ivanrojo07',
        avatar: 'https://scontent.fmex2-1.fna.fbcdn.net/v/t31.0-8/s960x960/18216488_10211111333132215_5855043206715828785_o.jpg?oh=53c005bb77e5668d37441d304f750738&oe=5984B8A1'
      },
      url: 'office.jpg',
      likes: 1,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];

  setTimeout(function () {
    res.send(pictures);  
  }, 2000)
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 3000');
})