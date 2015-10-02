var mongoose = require('mongoose')
var Schema = mongoose.Schema
var crypto = require('crypto')

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		unique: true
	},
	username: {
		type: String,
		unique: true
	},
	password: String,
	provider: String,
	providerId: String,
	providerData: {},
	todos: {}
})

UserSchema.pre('save', function(next){
	var md5 = crypto.createHash('md5')
	this.password = md5.update(this.password).digest("hex")
	next()
})

UserSchema.methods.authenticate = function(password){
	var md5 = crypto.createHash('md5')
	return this.password === md5.update(password).digest("hex")
}
mongoose.model('User', UserSchema);