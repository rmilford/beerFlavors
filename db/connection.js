var mongoose = require ("mongoose");

// var Schema = mongoose.Schema,
//     ObjectID = Schema.ObjectId

var StyleSchema = new mongoose.Schema ({
 style: String
})

var ProfileSchema = new mongoose.Schema ({
 name: String,
 styles: [StyleSchema]
})

mongoose.model("Profile", ProfileSchema)
mongoose.model("Style", StyleSchema)

module.exports = mongoose;
