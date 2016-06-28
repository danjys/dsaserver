// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var layerNameSchema = new Schema({
    name: String
});

//Retrun model

module.exports = restful.model('LayerName', layerNameSchema);