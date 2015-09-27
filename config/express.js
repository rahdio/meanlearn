var express = require('express')
var app = express()
var bodyparser = require('body-parser')

module.exports = function(){
	app.use(bodyparser.urlencoded({extended: true}))
	app.use(bodyparser.json())
	
	require('../app/routes/index_route.js')(app)
	require('../app/routes/create_route')(app)
	require('../app/routes/posts_route')(app)
	require('../app/routes/users_route')(app)
	require('../app/routes/blogposts_route')(app)

	return app
}