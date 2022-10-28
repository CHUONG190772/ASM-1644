var mongoose = require("mongoose");
var schema = mongoose.Schema;
var model = mongoose.model;

var RobotSchema = schema({
  name: String,
  brand: String,
  image: String,
  price: Number,
}, 
{
  versionKey: false
});

var RobotModel = model("Rô Bốt", RobotSchema, "robot");

module.exports = RobotModel;
