var express = require('express');
var app = express();

app.use(express.static("public"))
app.set("view engine", "ejs")

var serverStart = function(){
	console.log("server is listening");
}


app.get("/", function(req, res){
	res.render("home");
})


app.get("/posts", function(req, res) {
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "My adorable pet bunny", author: "Grace"},
		{title: "Can you believe it?", author: "Rupert"}
	];

	res.render("posts", {posts: posts});
})


app.get("/fallinlove/:thing", function(req, res) {
	var thing = req.params.thing;
	res.render("love", {thing: thing});
})








app.listen(3000, serverStart);
