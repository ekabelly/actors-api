const mongoose = require('mongoose');
const mongooseLeanId = require('mongoose-lean-id');

const EventSchma = mongoose.Schema({
    title: String,
    startDate: Date,
    endDate: Date,
    address: String,
    city: String,
    descripstion: String,
    eventType: String
}, {
    strict: true
});

EventSchma.plugin(mongooseLeanId);

module.exports = mongoose.model('events', EventSchma);