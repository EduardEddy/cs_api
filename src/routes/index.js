const express = require('express');

const userRoute = require('./user_route')
const app = express();

app.use( require('./user_route') )
//app.use('/users',userRoute )
/*app.get('/', function(req, res) {
    res.send('hello world');
  });*/

module.exports =app
