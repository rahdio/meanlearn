module.exports = function(app){
	var logController = require('../controllers/log_controller')
	var postController = require('../controllers/post_controller')
	
	app.use('/posts/:id', logController, postController.output)
	app.use('/posts', logController, postController.output)
}