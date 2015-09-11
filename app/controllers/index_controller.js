module.exports.output = function(req, res){
	var response = "postIT - Informing the world, one post at a time.<br /><br />"
	
	response += "Usage: <br />"
	response += "<b>GET /posts    </b><br />- returns all available blogposts, each as an object with id,description properties, in JSON"
	response += "<br />";
	response += "<b>GET /posts/id    </b><br />- returns all properties of blogpost with specified id, in JSON"
	response += "<br />";
	response += "<b>POST /posts		</b><br />- adds a new blogpost. blogpost is stored with a generated id"
	response += "<br />";
	response += "<b>PUT /posts/id		</b><br />- replaces content of blogpost with specified id"
	response += "<br />";
	response += "<b>DELETE /posts/id		</b><br />- deletes blogpost with specified id"

	res.send(response)
}