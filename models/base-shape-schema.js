// Dependencies
var extend = require('mongoose-schema-extend');
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// Base Shape
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

// Point Schema
var pointShapeSchema = baseSchema.extend({
	center: { x: Number, y: Number, z: Number}
});

// Arrow Schema
var arrowShapeSchema = baseSchema.extend({
	points: {
    head: { x: Number, y: Number, z: Number},
    tail: { x: Number, y: Number, z: Number}
  },
  fillColor: String
});

// Circle Schema
var circleShapeSchema = baseSchema.extend({
	center: { x: Number, y: Number, z: Number},
  radius: Number,
  fillColor: String
});

// Polyline Schema
var polylineShapeSchema = baseSchema.extend({
	points: [
    { x: Number, y: Number, z: Number}
  ],
  closed: Boolean,
  fillColor: String
});

// Rectangle Schema
var rectangleShapeSchema = baseSchema.extend({
	center: { x: Number, y: Number, z: Number},
  width: Number,
  height: Number,
  rotation: Number,
  normal: { x: Number, y: Number, z: Number},
  fillColor: String
});

// Rectangle Grid Schema
var rectangleGridShapeSchema = rectangleShapeSchema.extend({
	widthSubdivisions: Number,
  heightSubdivisions: Number
});


var BaseShape = restful.model('BaseShape', baseSchema);
var Point = restful.model('point', pointShapeSchema);
var Arrow = restful.model('arrow', arrowShapeSchema);
var Circle = restful.model('circle', circleShapeSchema);
var Polyline = restful.model('polyline', polylineShapeSchema);
var Rectangle = restful.model('rectangle', rectangleShapeSchema);
var RectangleGrid = restful.model('rectangle_grid', rectangleGridShapeSchema);

//Retrun model
module.exports = {
  BaseShape: BaseShape,
  Point: Point,
  Arrow: Arrow,
  Circle: Circle,
  Polyline: Polyline,
  Rectangle: Rectangle,
  RectangleGrid: RectangleGrid
};
