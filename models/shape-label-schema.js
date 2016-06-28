// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var shapeLabelSchema = new Schema({
  value : String,
  visibility: String,
  fontSize: Number,
  color: String
});

//Retrun model

module.exports = restful.model('ShapeLabel', shapeLabelSchema);