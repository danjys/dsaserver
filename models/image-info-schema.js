// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var imageInfoSchema = new Schema({
    imageId: ObjectId,
    imageName: String,
    imageWidth: Number,
    imageDepth: Number
});

//Retrun model

module.exports = restful.model('ImageInfo', imageInfoSchema);