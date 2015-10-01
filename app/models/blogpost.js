var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BlogpostSchema = new Schema({
	dateCreated: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		required: "TITLE_FIELD_BLANK"
	},
	description: {
		type: String,
		required: "DESCRIPTION_FIELD_BLANK"
	},
	fullpost: {
		type: String,
		required: "POST_FIELD_BLANK"
	},
	author: {
		type: Schema.ObjectId,
		ref: 'User'
	}
})

mongoose.model('Blogpost', BlogpostSchema)