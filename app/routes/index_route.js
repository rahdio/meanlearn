module.exports = function(app){
	var logController = require('../controllers/log_controller')
	var indexController = require('../controllers/index_controller')

	app.get('/', logController, indexController.output)
}