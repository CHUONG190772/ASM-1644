var mongoose = require("mongoose");
var schema = mongoose.Schema;
var model = mongoose.model;

var DollySchema = schema({
    name: String,
    brand: String,
    image: String,
    price: Number,
},
    {
        versionKey: false
    });

var DollyModel = model("Búp bê", DollySchema, "dolly");

module.exports = DollyModel;
