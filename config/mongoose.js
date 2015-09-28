var constants = require('./env/constants.js')
require('../app/models/user.js')
require('../app/models/blogpost.js')

module.exports = function(){
	var mongoose = require('mongoose')
	return mongoose.connect(constants.dbURL);		// return database reference/object
}