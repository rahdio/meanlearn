var blogposts = require('../controllers/blogposts_controller.js')

module.exports = function(app){
	app.route('/blogposts').post(blogposts.create)
}