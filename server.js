//initializing the server
var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

// static content for the app
app.use(express.static('public'));

//handlebars setup

var exphbs = require('express-handlebars');

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//importing routes from burger controller

var routes = require('./controllers/burgers_controller');

app.use(routes);

// start listening for server

app.listen(PORT,function(){
    console.log(`Server is listening on PORT: ${PORT}`)
})