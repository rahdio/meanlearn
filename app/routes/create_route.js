var users = require('../controllers/users_controller.js')
var blogposts = require('../controllers/blogposts_controller.js')

module.exports = function(app){
	var createController = require('../controllers/create_controller')

	app.get('/create', users.checkLogin, createController.render)
}