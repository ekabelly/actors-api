const mongoose = require('mongoose');
const mongooseLeanId = require('mongoose-lean-id');
const { metaData, strictWithTimestamp, required } = require('./helpers');

const EventSchema = mongoose.Schema({
    title: required(String),
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
    description: String,
    groupType: String,
    numOfParticipants: Number,
    maxNumOfParticipants: Number,
    minNumOfParticipants: Number,
    metaData
}, strictWithTimestamp);

EventSchema.plugin(mongooseLeanId);

module.exports = mongoose.model('events', EventSchema);