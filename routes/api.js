// Dependencies
var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');



//Bugzilla login
var bugUrl = "http://nam.ece.upatras.gr/bugzilla/jsonrpc.cgi";
var loginData =
{
"method": "User.login",
"params": [{"login":"info@sense.city","password":"1nf0sense"}],
"id": 1
};
var bugToken="";
request({
    url: bugUrl,
    method: "POST",
    json: loginData
}, function (error, response, body) {
        if (!error && response.statusCode === 200) {
						bugToken = body.result.token;
						var test = loginData.params.login;
						console.log("Login in bugzilla as: "+loginData.params[0].login);
						console.log("And assigned token: "+body.result.token);
        }
        else {
            console.log("error: " + error);
            console.log("response.statusCode: " + response.statusCode);
            console.log("response.statusText: " + response.statusText);
        }
});



//POST router
router.post('/', function (req,res){
		
   console.log("test");
   request({
    url: 'http://nam.ece.upatras.gr/bugzilla/jsonrpc.cgi',
    method: "POST",
    json: {method: "Bug.search",params: [{}],id: 1}
}, function (error, response, body) {
        if (!error && response.statusCode === 200) {
			     console.log(response.body.result.bugs);
            res.send(response.body.result.bugs);
        }
        else {
            console.log("error: " + error);
        }
});
    
    
    
});


router.post('/a', function (req,res){
		
   console.log("a");
		
});

router.post('/b', function (req,res){

   console.log("b");
		
});
router.get('/', function(req, res) {

     request({
    url: 'http://nam.ece.upatras.gr/bugzilla/jsonrpc.cgi',
    method: "POST",
    json: {method: "Bug.search",params: [{}],id: 1}
}, function (error, response, body) {
        if (!error && response.statusCode === 200) {
			     console.log(response.body.result.bugs);
            res.send(response.body.result.bugs);
        }
        else {
            console.log("error: " + error);
        }
});
    
    
});







// Return router
module.exports = router;
