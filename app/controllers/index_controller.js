module.exports.render = function(req, res){
	res.render('index', {
		title: 'MEAN Platform for Blogposts',
		user: req.user ? req.user.username : ''
	})
}