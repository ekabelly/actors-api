const mongoose = require('mongoose');
const mongooseLeanId = require('mongoose-lean-id');
const { required, strictWithTimestamp } = require('./helpers');

const UserSchema = mongoose.Schema({
    firstName: required(String),
    lastName: required(String),
    email: required(String, true),
    password: required(String)
}, strictWithTimestamp);

UserSchema.plugin(mongooseLeanId);

module.exports = mongoose.model('users', UserSchema);