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
BaseShape.Point.methods(['get', 'put', 'post', 'delete']);
BaseShape.Point.register(router, '/points');

// Return router
module.exports = router;
