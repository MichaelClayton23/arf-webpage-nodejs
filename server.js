var express = require('express')
var app = express();
var hbs = require('hbs');
require('./hbs/helper');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Partials con HBS
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
            nombre: 'Federico aymid',
        })
        //res.send(JSON.stringify(salida))
});
app.get('/about', function(req, res) {
    res.render('about', {})
});


app.listen(port);