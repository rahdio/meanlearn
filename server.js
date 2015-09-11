var listenPort = process.env.PORT || 8080		//	heroku access
var express = require('./config/express.js')
var app = express()

app.listen(listenPort)