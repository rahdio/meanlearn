var constants = require('./config/env/constants.js')
var listenPort = process.env.PORT || constants.port		//	heroku access
var mongoose = require('./config/mongoose.js')
var express = require('./config/express.js')
var db = mongoose()

var app = express()

app.listen(listenPort)

module.exports = app