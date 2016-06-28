// Dependencies
var extend = require('mongoose-schema-extend');
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var baseSchema = new Schema({
	label: {
    value : String,
    visibility: String,
    fontSize: Number,
    color: String
  },
  lineColor : String,
  lineWidth: Number,
}, {collection: 'baseshape', discriminatorKey : '_type'});

var pointShapeSchema = baseSchema.extend({
	center: { x: Number, y: Number, z: Number}
});

var BaseShape = restful.model('BaseShape', baseSchema);
var Point = restful.model('point', pointShapeSchema);
//Retrun model
module.exports = {
  BaseShape: BaseShape,
  Point: Point
};
