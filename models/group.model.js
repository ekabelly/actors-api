const mongoose = require('mongoose');
const mongooseLeanId = require('mongoose-lean-id');
const { metaData, strictWithTimestamp } = require('./helpers');

const EventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
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