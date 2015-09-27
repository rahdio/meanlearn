var mongoose = require('mongoose')
var Blogpost = mongoose.model('Blogpost')

module.exports.create = function(req, res, next){
	var blogpost = new Blogpost(req.body)
	
	blogpost.save(function(err){
		if (err)  return next(err)
		else	  res.json(blogpost)
	})
}