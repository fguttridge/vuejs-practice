const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
var User = require('../model/user');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 8081);

var mongoose = require('mongoose');
mongoose.connect('mongodb://fguttridge:AlwaysR3m3mb3r@ds042128.mlab.com:42128/fgutt_testweb', { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.get('/posts', (req, res) => {
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      }]
    )
  });

app.post('/createUser', (req,res) => {
    var db = req.db;
    var new_user = new User({
      principle: req.body.principle,
      publicKey: req.body.pubKey,
      privateKey: req.body.privKey,
      email: req.body.email,
      passwordHash: req.body.password
    });
    new_user.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'User saved successfully!'
      })
    })
});