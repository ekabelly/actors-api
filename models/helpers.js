const mongoose = require('mongoose');

const required = (type, unique) => ({
    type,
    required: true,
    unique
});

module.exports = {
    metaData: {
        lastUpdatedBy: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Users'
        },
        createdBy: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Users'
        }
    },
    required,
    strictWithTimestamp: {
        strict: true,
        timestamps: true
    }
}