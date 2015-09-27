var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BlogpostSchema = new Schema({
	author: String,
	title: String,
	description: String,
	fullpost: String
})

mongoose.model('Blogpost', BlogpostSchema)