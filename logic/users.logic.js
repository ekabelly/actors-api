const usersWrap = require('../db-wrap/users.wrap');

module.exports.updateUser = async user => {
    const userRes = await usersWrap.updateUser(user);
    return userRes;
}

module.exports.createUser = async user => {
    const userRes = await usersWrap.createUser(user);
    return userRes;
}

module.exports.fetchUserById = async id => {
    const events = await usersWrap.fetchUserById(id);
    return events;
}

module.exports.fetchUsers = async queryParams => {
    const users = await usersWrap.fetchUsers(queryParams);
    return users;
}