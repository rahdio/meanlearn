var users = require('../controllers/users_controller.js')
var passport = require('passport')

module.exports = function(app){
	app.route('/users').post(users.create).get(users.list)
	app.route('/users/:userID').get(users.readUser).put(users.updateUser).delete(users.deleteUser)
	app.param('userID', users.filterByID)
	app.route('/register').get(users.renderRegister).post(users.register)
	app.route('/login').get(users.renderLogin).post(passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	}))
	app.get('/logout', users.logout)
}