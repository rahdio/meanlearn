module.exports = function(app){
	var logController = require('../controllers/log_controller')
	var listController = require('../controllers/list_controller')
	
	app.get('/posts', logController, listController.output)
}