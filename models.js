var mongoose = require("mongoose")
, Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;

var UserSchema = new mongoose.Schema({
    name: String,
});

mongoose.model("User", UserSchema);
