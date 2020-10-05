const Users = require('../models/user.model');

module.exports.updateUser = async user => {
    const userRes = await Users.findOneAndUpdate({ _id: user.id }, {
        ...user,
        metaData: {
            ...user.metaData,
            lastUpdated: new Date()
        }
    }, {
        upsert: false,
        new: true,
        useFindAndModify: false
    }).lean();
    return userRes;
}

module.exports.createUser = async user => {
    const userRes = await new Users({
        ...user,
        metaData: {
            ...user.metaData,
            createdAt: new Date(),
            lastUpdated: new Date()
        }
    }).save();
    return userRes;
}