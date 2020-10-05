const mongoose = require('mongoose');
const mongooseLeanId = require('mongoose-lean-id');
const { userMetaData, required } = require('./helpers');

const UserSchema = mongoose.Schema({
    firstName: required(String),
    lastName: required(String),
    email: required(String, true),
    password: required(String),
    metaData: userMetaData
}, {
    strict: true
});

UserSchema.plugin(mongooseLeanId);

module.exports = mongoose.model('users', UserSchema);