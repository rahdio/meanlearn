var users = require('../controllers/users_controller.js')
var blogposts = require('../controllers/blogposts_controller.js')

module.exports = function(app){
	app.route('/blogposts').post(users.checkLogin, blogposts.create).get(users.checkLogin, blogposts.list)
	app.route('/blogposts/:postID').get(users.checkLogin, blogposts.readPost).put(users.checkLogin, blogposts.authorized, blogposts.updatePost).delete(users.checkLogin, blogposts.authorized, blogposts.deletePost)
	app.param('postID', blogposts.filterByID)
}