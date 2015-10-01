module.exports.URL = "http://post-it-mean.heroku.com"
module.exports.output = function(req, res){
	
	switch(req.method){
		case "GET":
			if (req.params.id === undefined)
				res.send("postIT - send full list (id and description) of blogposts ")
			else		// obtain properties of blogpost with specified id from db
				res.send("postIT - list of properties of blogpost with id - "+ req.params.id) 

			break;

		case "POST":
			// add new blogpost with properties in body of request, no id passed in as it's generated by server
			res.send("postIT - adding a new blogpost to blogpost collection")
			break;

		case "PUT":
			if (req.params.id === undefined)
				res.send("postIT - Please include id of blogpost in request url.")
			else		// replace blogpost with specified id with properties passed in body of request
				res.send("postIT - replacing blogpost of id - " + req.params.id + " with values passed in request body")

			break;

		case "DELETE":
			if (req.params.id === undefined)
				res.send("postIT - Please include id of blogpost in request url.")
			else		// delete blogpost with specified id 
				res.send("postIT - deleting entry of blogpost with id - " + req.params.id)
			break;

		default:
			res.status(501).send("HTTP Method not implemented. See " + module.exports.URL + " for usage instructions");	
	}
}