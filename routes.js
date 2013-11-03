var mongoose = require("mongoose")
, Schema = mongoose.Schema
, ObjectId = Schema.ObjectId
, request = require("request")
, models = require("./models");

var User = mongoose.model("User");

exports.index = function(req, res){
    res.render("index");
}
