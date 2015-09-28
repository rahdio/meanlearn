var users = require('../controllers/users_controller.js')

module.exports = function(app){
	app.route('/users').post(users.create).get(users.list)
	app.route('/users/:userID').get(users.readUser).put(users.updateUser).delete(users.deleteUser)
	app.param('userID', users.filterByID)
}