const mongoose = require('mongoose');

const required = (type, unique) => ({
    type,
    required: true,
    unique
});

const metaData = {
    lastUpdated: required('Number'),
    createdAt: Number,
}

module.exports = {
    metaData: {
        ...metaData,
        lastUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
        createdBy: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Users'
        }
    },
    userMetaData: metaData,
    required
}