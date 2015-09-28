var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var User = require('mongoose').model('User')

module.exports = function(){
	passport.use(new LocalStrategy(function(username, password, status){
		User.findOne({username: username}, function(err, user){
			if (err)	return status(err)
			if (!user)	
				return status(null, false, {message: "UNKNOWN_USER"})
			if (!user.authenticate(password))	
				return status(null, false, {message: "INVALID_PASS"})

			return status(null, user)
		})
	}))
}