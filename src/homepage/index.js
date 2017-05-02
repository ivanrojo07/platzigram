var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user: {
      username: 'ivanrojo07',
      avatar: 'https://scontent.fmex2-1.fna.fbcdn.net/v/t31.0-8/s960x960/18216488_10211111333132215_5855043206715828785_o.jpg?oh=53c005bb77e5668d37441d304f750738&oe=5984B8A1'
      },
      url: 'office.jpg',
      likes: 1024,
      liked: true
    },
    {
      user: {
      username: 'ivanrojo07',
      avatar: 'https://scontent.fmex2-1.fna.fbcdn.net/v/t31.0-8/s960x960/18216488_10211111333132215_5855043206715828785_o.jpg?oh=53c005bb77e5668d37441d304f750738&oe=5984B8A1'
      },
      url: 'office.jpg',
      likes: 1,
      liked: true
    },
  ];

  empty(main).appendChild(template(pictures));
})
