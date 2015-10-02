module.exports.render = function(req, res){
	res.render('create', {
		title: 'Create New Post',
		user: req.user ? req.user.firstName : ''
	})
}