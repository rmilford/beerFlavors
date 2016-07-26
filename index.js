var express = require("express");
var parser = require("body-parser");
var hbs = require("express-handlebars");
var mongoose = require("./db/connection");

var app = express();

var Profile = mongoose.model("Profile");

app.set("port", process.env.PORT || 4000);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialDir:      "views/",
  layoutsDir:       "views/",
  defautLayout:     "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.send("rebekahisawesome");
});

app.get("/profiles", function(req, res){
  Profile.find({}).then(function(profiles){
    res.render("profile-index", {
      profiles: profiles
    });
  });
});

app.listen(4000, function(){
  console.log("It's aliiive!");
});
