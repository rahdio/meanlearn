var mongoose = require('mongoose')
var Blogpost = mongoose.model('Blogpost')

module.exports.create = function(req, res, next){
	var blogpost = new Blogpost(req.body)
	
	blogpost.save(function(err){
		if (err)  return next(err)
		else	  res.json(blogpost)
	})
}

module.exports.list = function(req, res, next){
	Blogpost.find({}, function(err, posts){
		if (err) return next(err)
		else	 res.json(posts)
	})
}

module.exports.filterByID = function(req, res, next, id){
	Blogpost.findOne({_id: id}, function(err, postData){
		if (err) return next(err)
		else{
			req.postData = postData
			next()
		}
	})
}

module.exports.readPost = function(req, res){
	res.json(req.postData)
}

module.exports.updatePost = function(req, res, next){
	Blogpost.findByIdAndUpdate(req.postData.id, req.body, function(err, postData){
		if (err) return next(err)
		else	 res.json(postData)
	})
}

module.exports.deletePost = function(req, res, next){
	req.postData.remove(function(err){
		if (err) return next(err)
		else	 return res.json(req.postData)
	})
}
