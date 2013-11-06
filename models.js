var mongoose = require("mongoose")
, Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;

var MessageSchema = new mongoose.Schema({
    name: String,
    message: String,
});

mongoose.model("Message", MessageSchema);
