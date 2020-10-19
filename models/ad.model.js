const mongoose = require('mongoose');
const mongooseLeanId = require('mongoose-lean-id');
const { metaData, strictWithTimestamp, required } = require('./helpers');

const AdsSchema = mongoose.Schema({
    title: required(String),
    address: String,
    city: String,
    description: required(String),
    lat: required(Number),
    lon: required(Number),
    metaData
}, strictWithTimestamp);

const populatePre = function(next) {
    this.populate('users');
    this.populate('createdBy');
    next();
}

AdsSchema
    .pre('find', populatePre)
    .pre('findOne', populatePre)
    .pre('findById', populatePre);

AdsSchema.plugin(mongooseLeanId);

module.exports = mongoose.model('ads', AdsSchema);