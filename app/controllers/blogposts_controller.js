var mongoose = require('mongoose')
var Blogpost = mongoose.model('Blogpost')

var errorMessage = function(err){
	for (var error in err.errors){
		if (err.errors[error].message) 		// get first non-null error message
			return err.errors[error].message
	}	
}

module.exports.create = function(req, res, next){
	var blogpost = new Blogpost(req.body)
	blogpost.creator = req.user
	blogpost.save(function(err){
		if (err){
			var body = { message: errorMessage(err)}
			return res.status(400).send(body)
		}
		else{
			var body = { message: "Blogpost successfully created."}
			return res.status(200).send(body)
		}	
	})
}

module.exports.list = function(req, res, next){
	// sort by datecreated in descending order and add firstname and username fields to author-property object
	Blogpost.find().sort('-dateCreated').populate('author','firstName username').exec(function(err, blogposts){
		if (err){
			var body = { message: errorMessage(err)}
			return res.status(400).send(body)	
		}else{
			req.postData = blogposts
			next()
		}
	})
}

module.exports.filterByID = function(req, res, next, id){
	// find post with id and store in request object for use in next middleware function
	Blogpost.findById(id).populate('author', 'firstName username').exec(function(err, postData){
		if (err) return next(err)

		if (!postData) return next(new Error("POST_WITH_ID_NOT_FOUND: "+id))

		req.postData = postData
		next()
	})
}

module.exports.readPost = function(req, res){
	res.json(req.postData)
}

module.exports.updatePost = function(req, res, next){
	// update editable parts of blogpost
	var blogpost = req.blogpost
	if (req.body.title) blogpost.title = req.body.title
	if (req.body.description) blogpost.description = req.body.description
	if (req.body.fullpost) blogpost.fullpost = req.body.fullpost

	blogpost.save(function(err){
		if (err){
			var body = { message: errorMessage(err) }
			return res.status(400).send(body)
		}else
			res.json(blogpost)
	})
}

module.exports.deletePost = function(req, res, next){
	req.postData.remove(function(err){
		if (err){
			var body = { message: errorMessage(err)}
			return res.status(400).send(body)
		}else
			return res.json(req.postData)
	})
}

module.exports.authorized = function(req,res, next){
	if (req.postData.creator.id !== req.user.id){
		var body = { message: "USER_UNAUTHORIZED"}
			return res.status(400).send(body)
	}
}

module.exports.render = function(req, res, next){
	res.render('blogposts', {
		title: 'List of Posts',
		data: req.postData
	})
}

module.exports.renderById = function(req, res, next){
	res.render('blogpost_id', {
		title: req.postData.title,
		data: req.postData
	})
}