const usersWrap = require('../db-wrap/users.wrap');

module.exports.updateUser = async user => {
    const userRes = await usersWrap.updateUser(user);
    return userRes;
}

module.exports.createUser = async user => {
    const userRes = await usersWrap.createUser(user);
    return userRes;
}