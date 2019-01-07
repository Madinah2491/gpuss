var express = require('express');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

//self instanciating constructor
var app = express();

app.use(bodyParser.urlencoded({ extended: true })) // extended true allows objects to be passed thru 
app.use(bodyParser.json())

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(request, response){
    console.log("I'm working");
    response.render('index');
});

app.listen