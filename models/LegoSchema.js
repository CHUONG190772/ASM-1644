var mongoose = require("mongoose");
var schema = mongoose.Schema;
var model = mongoose.model;

var LegoSchema = schema({
    name: String,
    image: String,
    color: String,
    price: Number,
    date : Date,
},
    {
        versionKey: false
    });

var LegoModel = model("Lego", LegoSchema, "lego");

module.exports = LegoModel;
