var express = require('express');
const mongoose   = require('mongoose');
var bodyParser = require('body-parser');
const fs = require('fs');
const https = require('https');

const cert = fs.readFileSync('./metigo_fr.crt');
const ca = fs.readFileSync('./metigo_fr.ca-bundle');
const key = fs.readFileSync('./metigo_fr.p7b');

const httpsOptions = {cert, ca}

const httpsServer = https.createServer(httpsOptions, app);

var app = express()
app.set('view engine','ejs');

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

httpsServer.listen(443, 'metigo.fr');

// app.listen(port, () =>{
//     console.log(`listening on ${port}`);
// })
