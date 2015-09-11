module.exports.output = function(req, res){
	
	switch(req.method){
		case "GET":
			res.send("postIT - listing of available posts with id - "+req.params.id)
			break;
		case "POST":
			res.send("postIT - adding a new post to collection")
			break;
		case "PUT":
			res.send("postIT - replacing collection by value")
			break;
		case "DELETE":
			res.send("postIT - deleting entry from list")
			break;
	}

}