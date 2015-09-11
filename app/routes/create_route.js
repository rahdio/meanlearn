module.exports = function(app){
	var logController = require('../controllers/log_controller')
	var createController = require('../controllers/create_controller')
	
	app.get('/create', logController, createController.output)
}