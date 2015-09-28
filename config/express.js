var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var flash = require('connect-flash')
var session = require('express-session')

module.exports = function(){
	app.use(bodyparser.urlencoded({extended: true}))
	app.use(bodyparser.json())
	app.set('views', './app/views')
	app.set('view engine', 'jade')
	app.use(flash())
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: 'SecretCookieSecretCookie'
	}))
	
	require('../app/routes/index_route.js')(app)
	require('../app/routes/create_route')(app)
	require('../app/routes/posts_route')(app)
	require('../app/routes/users_route')(app)
	require('../app/routes/blogposts_route')(app)

	return app
}