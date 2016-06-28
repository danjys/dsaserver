// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var LayerNameSchema = require('./layer-name-schema');

var annotationLayerSchema = new Schema({
  layerName: {
  				type: ObjectId,
  				ref: LayerNameSchema
  			},
  description: String,
  attributes : Array,
  shapes: Array,
  color: String
});

//Retrun model

module.exports = restful.model('AnnotationLayer', annotationLayerSchema);