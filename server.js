var express = require('express');
const mongoose   = require('mongoose');
var bodyParser = require('body-parser');
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

app.listen(port, () =>{
    console.log(`listening on ${port}`);
})
