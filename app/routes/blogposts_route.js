var blogposts = require('../controllers/blogposts_controller.js')

module.exports = function(app){
	app.route('/blogposts').post(blogposts.create).get(blogposts.list)
	app.route('/blogposts/:postID').get(blogposts.readPost).put(blogposts.updatePost).delete(blogposts.deletePost)
	app.param('postID', blogposts.filterByID)
}