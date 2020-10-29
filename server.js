var express = require('express');
const mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var app = express()
app.set('view engine','ejs');

const fs = require('fs');
const https = require('https');

const hostname = 'metigo.fr'
const httpsPort = 443

const cert = fs.readFileSync('./certificate.crt');
const ca = fs.readFileSync('./ca_bundle.crt');
const key = fs.readFileSync('./private.key');

const httpsOpts = {cert, ca, key}

const httpsServ = https.createServer(httpsOpts, app)


var routes = require('./routes')

app.use(express.static(__dirname + '/assets/'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//C O N F I G U R A T I O N // MONGO-DB

//
//connecting to mongoDB
mongoose.connect("mongodb+srv://nessness:p4GsO5o4eqr4o05w@cluster0.y36xu.mongodb.net/utilisateurs?retryWrites=true&w=majority",{useNewUrlParser : true, useUnifiedTopology: true})
    .then(console.log("Mongo Connected"))
    .catch(err => console.log(err));

    

app.use('/',routes);

var port = process.env.PORT || 3000

httpsServ.listen(httpsPort, hostname)

