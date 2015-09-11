var express = require('express')
var app = express()

module.exports = function(){
	require('../app/routes/index_route.js')(app)
	require('../app/routes/create_route')(app)
	require('../app/routes/list_route')(app)

	return app
}