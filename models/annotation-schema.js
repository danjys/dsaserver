// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ImageInfo = require('./image-info-schema');
var AnnotationLayerSchema = require('./annotation-layer-schema');

var annotationSchema = new Schema({
  imageInfo: {
  				type: ObjectId,
  				ref: ImageInfo
  			},
  creator: String,
  created: Date,
  updateId: ObjectId,
  updated: Date,
  annotationLayer: [ AnnotationLayerSchema ]
});

//Retrun model

module.exports = restful.model('Annotations', annotationSchema);


