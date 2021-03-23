const {ER_NO_REFERENCED_ROW_2} = require('./error-codes');

module.exports = {
    [ER_NO_REFERENCED_ROW_2]: id => `No actor found with id ${id} to alias to`
}