var mongoose = require('mongoose')
var User = mongoose.model('User')
var passport = require('passport')

var getErrorMessage = function(err){
	var message = ''
	if(err.code){
		switch(err.code){
			case 11000:
			case 11001:
				message = "USER_EXISTS"
				break;
			default:
				message = "GENERAL_ERROR"
		}
	}else{
		for (var errName in err.errors){
			if (err.errors[errName].message) 
				message = err.errors[errName].message
		}
	}
	return message;
}

module.exports.renderLogin = function(req, res, next){
	if (!req.user){
		res.render('login', {
			title: 'Log-In Form',
			messages: req.flash('error') || req.flash('info')
		})
	}else
		return res.redirect('/')
}

module.exports.renderRegister = function(req, res, next){
	if (!req.user){
		res.render('register', {
			title: 'Registration Form',
			messages: req.flash('error')
		})
	}
}

module.exports.register = function(req, res,next){
	if (!req.user){
		var user = new User(req.body)
		var message = null
		user.provider = 'local'
		user.save(function(err){
			if (err){
				var message = getErrorMessage(err)
				req.flash('error', message)
				return res.redirect('/register')
			}

			req.login(user, function(err){
				if (err) return next(err)
				req.user = user
				return res.redirect('/')
			})
		})
	}else
		return res.redirect('/')
}

module.exports.logout = function(req, res){
	req.logout()
	res.redirect('/')
}
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

module.exports.checkLogin = function(req, res, next){
	if (!req.isAuthenticated()){
		var body = { message: "AUTHENTICATION_REQUIRED"}
		return res.status(401).send(body)
	}
	next();
}