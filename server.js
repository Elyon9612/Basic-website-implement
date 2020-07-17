/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:Honghao Li
 * Email:lihongh@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars'); // ???

var PostData = require('./postData');
app.engine('handlebars',exphbs({defaultLayout: 'main'}));  //replace the html file
app.set('view engine','handlebars');

app.use(express.static('public'));

app.get('/',function(req,res,next){  //this is show the main page
	res.status(200).render('viewpage',PostData);
});


app.get('/index.html',function(req,res,next){  //this is should not work because we don't need to access html
	res.status(200).render('viewpage',{
		postDatas:PostData
	});
});

app.get('/posts/:number',function(req,res,next){ 
	var num = req.params.number;
	if(num >=0 && num <= 7){
		res.status(200).render('partials/item',PostData[num]);
	}else{
		next();
	}
});

app.get('*', function (req, res){
	res.status(404).render('404');
});

app.listen(4649, function () {
  console.log("== Server is listening on port", port);
});
