const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const argon = require('argon2');

const app = express();
var User = require('../model/user');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 8081);

var mongoose = require('mongoose');
mongoose.connect('mongodb://fguttridge:AlwaysR3m3mb3r@ds058739.mlab.com:58739/fgutt_testweb', { useNewUrlParser: true });
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

  // User management endpoints
app.post('/createUser', async (req,res) => {
    var db = req.db;
    // Use argon2 to create secure password
    try {
      let hash = await argon.hash(req.body.password).then(hash => {
      // Send password to mongodb
      var new_user = new User({
        principle: req.body.principle,
        publicKey: req.body.pubKey,
        privateKey: req.body.privKey,
        email: req.body.email,
        passwordHash: hash
      });
      new_user.save(function (error) {
        if (error) {
          console.log(error)
        }
        res.send({
          success: true,
          message: 'User saved successfully!'
        })
      });
    });
    } catch (err) {
      console.log(err);
    };

});

app.post('/login', async (req, res) => {
  let foundUser
  await User.find({"principle": req.body.principle}, function (error, user) {
    foundUser = user
    if (foundUser === undefined) {
      res.send({
        errorCode: "001",
        message: "The username or password did not match"
      });
    }
  })
  .sort({_id:-1})
  .catch(err => console.log(err));
  try {
    if (await argon.verify(foundUser[0].passwordHash, req.body.password)) {
      res.send({
        user: foundUser[0]
      });
    } else {
      res.send({
        errorCode: "001",
        message: "The username or password did not match"
      });
    }
  } catch(err) {
    console.log(err);
  }
})