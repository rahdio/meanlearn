var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports.create = function(req, res, next){
	var user = new User(req.body)
	
	user.save(function(err){
		if (err)  return next(err)
		else	  res.json(user)
	})
}

module.exports.list = function(req, res, next){
	User.find({}, function(err, users){
		if (err) return next(err)
		else	 res.json(users)
	})
}

module.exports.filterByID = function(req, res, next, id){
	User.findOne({_id: id}, function(err, user){
		if (err) return next(err)
		else{
			req.user = user
			next();
		}
	})
}

module.exports.readUser =function(req, res){
	res.json(req.user)
}

module.exports.updateUser = function(req, res, next){
	User.findByIdAndUpdate(req.user.id, req.body, function(err, user){
		if (err) return next(err)
		else	res.json(req.user)
	})
}

module.exports.deleteUser = function(req, res, next){
	req.user.remove(function(err){
		if (err) return next(err)
		else	res.json(req.user)
	})
}