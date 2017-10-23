/////dependancies/////
const express = require ("express");
const bodyParser = require ("body-parser");
const path = require ("path");

/////appress app estup/////
var app = express();
var PORT =3000;

/////data parsing setup/////
//??????
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/////Router file locations
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

/////listener/////
app.listen(PORT, function() {
  console.log("express App listening on PORT: " + PORT);
});