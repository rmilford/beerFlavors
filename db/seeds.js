var mongoose = require("./connection");
var seedData = require("./seeds");

var Profile = mongoose.model("Profile");

Profile.remove({}).then(function(){
 Profile.collection.insert(seedData).then(function(){
   process.exit();
 });
});
