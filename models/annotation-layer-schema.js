// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var annotationLayerSchema = new Schema({
  layerName: { name: String },
  description: String,
  attributes : Array,
  shapes: Array,
  color: String
});

//Retrun model

module.exports = restful.model('AnnotationLayer', annotationLayerSchema);
