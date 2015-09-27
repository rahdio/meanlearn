var users = require('../controllers/users_controller.js')

module.exports = function(app){
	app.route('/users').post(users.create)
}