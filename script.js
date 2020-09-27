var express = require('express');
var bodyParser = require('body-parser');

var db = require('./db');
var userRoute = require('./routes/user.route')

const { render } = require('pug');

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/',function(req, res){
   res.render('index', {name: 'Quang'});
})

app.use('/users',userRoute); //express router
app.use(express.static('public'));
app.set('view engine','pug');
app.listen(3000, () =>{
   console.log('Server listening port 3000');
})