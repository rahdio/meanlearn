module.exports = function(app){
	var logController = require('../controllers/log_controller')
	var listController = require('../controllers/list_controller')
	
	app.get('/posts/:id', logController, listController.output)
	app.post('/posts/:id', logController, listController.output)
	app.put('/posts/:id', logController, listController.output)
	app.delete('/posts/:id', logController, listController.output)
}