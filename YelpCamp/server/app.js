var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
 var camps  = [{"name":'camp1',"image":""},{"name":'camp2',"image":""},{"name":'camp3',"image":""}]
  
  app.get('/', function(req, res ,next){
           res.json('index page');
           next();
  });
  app.get('/campgrounds', function(req, res, next){
     res.send(camps);
  })
  



  app.listen(3000, function(req, res){
      console.log('server is running at 3000');
  });
