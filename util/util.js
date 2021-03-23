const errorMessages = require("../constants/error-messages");

// This function will wrap query.conn with promise and err handler  since conn.query doesn't return a promise
const promiseWrap = cb =>
    new Promise((resolve, reject) =>
        cb((err, data, id) => {
            if (err) {
                if (err && errorMessages[err.code]) {
                    return reject(new Error(errorMessages[err.code](id)))
                }
                return reject(err);
            }
            resolve(data);
        }));

// Create a date time for mySql
const createNewDatetime = () => new Date().toISOString().slice(0, 19).replace('T', ' ')

module.exports = {
    promiseWrap,
    createNewDatetime
}