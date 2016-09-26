var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/CherryBlossom.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'CherryBlossom.jpg'));
});

app.get('/ui/autmn.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'autmn.jpg'));
});
var links={
	'personal' :{
		title: 'About me | Personal',
		heading: 'Hi! To all...',
		content: `
			<p>
			The online course Intrdoduction to modern application development has helped to create this app!
			This is my personal page.
			</p>
		`
	},
	'academics' :{
		title: 'About me | Academics',
		heading: 'Studies..',
		content: `
			<p>
			The online course Intrdoduction to modern application development has helped to create this app!
			This page is about my academics..
			</p>
		`	
	},
	'professional' :{
		title: 'About me | Professional',
		heading: 'Career',
		content: `
			<p>
			The online course Intrdoduction to modern application development has helped to create this app!
			This page is about my career..
</p>
		`	
	}
};
function createTemplate(data){
	var title=data.title;
	var heading=data.heading;
	var content=data.content;
	var htmlTemplate = `
		<html>
		<head>
			<style>   
			body {
				font-family: times-new-roman;
				background-image: url("/ui/autmn.jpg");
				margin-top: 150px;
				color: white;
			}
			h1{
				color: white;
			}
			</style>
			<title>
			${title}
			</title>
		 <meta name="viewport" content= "width=device-width, initial-scale=1">
		</head>
		<body>
			<h1>${heading}</h1>
			<div class="justify">
			${content}
			</div>
		</body>
		</html>
		`;
				
	return htmlTemplate
	};
app.get('/:pageName',function(req,res){
	var pageName=req.params.pageName;
	res.send(createTemplate(links[pageName]));
	});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
