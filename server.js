// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Mongo Db
//mongoose.connect('mongodb://localhost/sensecity');

// Express
var app = express();
app.use(bodyParser.urlencoded({limit: '50mb'},{extended: true}));
app.use(bodyParser.json({limit: '50mb'}));


//headers
app.use(function (req, res, next) {
 
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Routes
app.use('/bugs', require('./routes/api'));

// start server
app.listen(3001);
console.log('API is running on port 3001');