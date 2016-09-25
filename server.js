var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var links={
	'personal' :{
		title: 'Personal stuffs',
		heading: 'Hi! To all...',
		content: `
			<p>I am Gayathri Ganesh. This is the very first blog I have created. The online course on Introduction to Modern Application Development has helped me to create this blog. </p>  <p>I am a native of Kerala. I am currently in the final year of B. Tech degree in Vidya Academy of Science and Technology. I am preparing for my placements. According to me getting placed is not just about getting a job and working to earn money. It's about applying what you have learned in theory into practice. Its an oppurtunity where you can enhance your knowledge and improve your skills.</p>
			<p>Learning new stuffs is always fun and useful. I realized it a bit late.But "Its better late than Never!". Ever since I have realized this I try to do something new everyday, apart from mugging up theories from my syllabus. It doesnot necessary involve only studies and other related items.For example, In the weekends I find time to make something new in the kitchen. This is because I love cooking and I feel I am quite good at it.</p>
			<p>.All of this new changes started to me in this very final year of B. Tech. Mostly because I got serious about my placements. I do things because I want to do them, not because I have show it off infront of others. Because in the end only we can help ourselves. And since then I did many new things. The first was I joined for JavaScript course in CodeAcademy. Then I paired up with my friend and participated in Codevita and to our astonishment we cleared the first round. Even though we did not clear the second round, I was not disheartened by this, as clearing the round 1 among 50,000+ teams is good.</p>
			<p>So all I wish to say to all of you is that do new things, anything that you are interested in. Do it because you want to do it, not because you want to show off. </p>
		`	
}
};
var createTemplate=function(data){
	var style=data.style;
	var title=data.title;
	var heading=data.heading;
	var content=data.content;
	
	var htmlTemplate = `
		<html>
		<head>
			<style>   
			body {
				font-family: times-new-roman;
			background-image: url(ui/CherryBlossom.jpg);
				margin-top: 150px;
			}
			</style>
			<title>$[title]</title>
		 <meta name="viewport" content= "width=device-width, initial-scale=1">
		</head>
		<body>
			<h1>$[heading]</h1>
			<div class="justify" color="blue">
			$[content]
			</div>
		</body>
		</html>
	`	; 
	return htmlTemplate;
};
app.get('/:pageName',function(req,res){
	var pageName=req.params.pageName;
	res.send(createTemplate(links[pageName]));	
    });


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
