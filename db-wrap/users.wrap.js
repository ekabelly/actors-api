const Users = require('../models/user.model');

module.exports.updateUser = async user => {
    const userRes = await Users.findOneAndUpdate({ _id: user.id }, user, {
        upsert: false,
        new: true,
        useFindAndModify: false
    }).lean();
    return userRes;
}

module.exports.createUser = async user => {
    const userRes = await new Users(user).save();
    return userRes;
}

module.exports.fetchUsers = async () => {
    const users = await Users.find({}).lean();
    return users;
}

module.exports.fetchUserById = async id => {
    const user = await Users.findById({ _id: id }).lean();
    return user;
}