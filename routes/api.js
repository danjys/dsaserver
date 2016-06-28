// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Annotation = require('../models/annotation-schema');
var BaseShape = require('../models/base-shape-schema');

// Routes
Annotation.methods(['get', 'put', 'post', 'delete']);
Annotation.register(router, '/annotations');

// Routes
BaseShape.BaseShape.methods(['get', 'delete']);
BaseShape.BaseShape.register(router, '/shapes');

BaseShape.Point.methods(['put', 'post']);
BaseShape.Point.register(router, '/point');

BaseShape.Arrow.methods(['put', 'post']);
BaseShape.Arrow.register(router, '/arrow');

BaseShape.Circle.methods(['put', 'post']);
BaseShape.Circle.register(router, '/circle');

BaseShape.Polyline.methods(['put', 'post']);
BaseShape.Polyline.register(router, '/polyline');

BaseShape.Rectangle.methods(['put', 'post']);
BaseShape.Rectangle.register(router, '/rectangle');

BaseShape.RectangleGrid.methods(['put', 'post']);
BaseShape.RectangleGrid.register(router, '/rectanglegrid');

// Return router
module.exports = router;
