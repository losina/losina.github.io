const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyParser.urlencoded({"extended": true}))
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.render("home")
})
app.get('/home', function(req, res) {
    res.redirect("/")
})

app.get('/design', function(req, res) {
    res.render("design")
})

app.get('/programming', function(req, res) {
    res.render("programming")
})


app.get('/photography', function(req, res) {
    res.render("photography")
})


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
