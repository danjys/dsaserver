// Dependencies
var extend = require('mongoose-schema-extend');
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ShapeLabel = require('./shape-label-schema');

var baseSchema = new Schema({
	label: {
  				type: ObjectId,
  				ref: ShapeLabel
  			},
  lineColor : String,
  lineWidth: Number,
}, {collection: 'baseshape', discriminatorKey : '_type'});


var Coordinate = require('./coordinate-schema');
var pointShapeSchema = baseSchema.extend({
	center: {
		type: ObjectId,
		ref: Coordinate
	}
});

var BaseShape = restful.model('BaseShape', baseSchema);
var Point = restful.model('point', pointShapeSchema);
//Retrun model
module.exports = {
  BaseShape: BaseShape,
  Point: Point
};
