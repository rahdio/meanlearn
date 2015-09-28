var passport = require('passport')
var mongoose = require('mongoose')

module.exports = function(){
	passport.serializeUser(function(user, status){
		status(null, user.id)
	})

	passport.deserializeUser(function(id, status){
		User.findOne(
			{_id:id},
			'-password', function(err, user){
				status(err, user)
			}
		)
	})

	require('./strategies/local')()
}