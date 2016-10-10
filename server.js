var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Content={
    title:'Article_ONE|Parvathy Komalan S',
    heading:'Article_ONE',
    date:'10/10/2016',
    content :`
    <p>
            This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This \ article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
            </p>
        
            <p>
            This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
        </p>
        <p>
            This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
        </p>
        <p>
            This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
        </p>`
    
    
};

function createtemplate (data){
    title=data.title;
    heading=data.heading;
    date=data.date;
    content=data.content;
var htmltemplate =`
<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class ='container'>
    <div>
        <a href="/">
           Back 
        </a>
    </div>
    <hr/>
    <h4>
        ${heading}
    </h4>
    <div>
       ${date}
    </div>
    <div>
        ${content}
    </div>
    </div>
   </body> 
</html>
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article_one', function (req, res) {
  res.send(createtemplate(articleone));
});
app.get('/article_two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
});
app.get('/article_three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article_three.html'));
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
