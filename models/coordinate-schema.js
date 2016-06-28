// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var coordinateSchema = new Schema({
  x: Number,
  y: Number,
  z: Number
});

//Retrun model

module.exports = restful.model('Coordinate', coordinateSchema);