const mongoose = require('mongoose');
const mongooseLeanId = require('mongoose-lean-id');
const { metaData, strictWithTimestamp, required } = require('./helpers');

const EventSchema = mongoose.Schema({
    title: required(String),
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'groups', required: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users', required: false }],
    startDate: Date,
    endDate: Date,
    address: String,
    city: String,
    description: String,
    eventType: String,
    numOfParticipants: Number,
    maxNumOfParticipants: Number,
    minNumOfParticipants: Number,
    metaData
}, strictWithTimestamp);

const populatePre = function(next) {
    this.populate('users');
    this.populate('createdBy');
    next();
}

EventSchema
    .pre('find', populatePre)
    .pre('findOne', populatePre)
    .pre('findById', populatePre);

EventSchema.plugin(mongooseLeanId);

module.exports = mongoose.model('events', EventSchema);