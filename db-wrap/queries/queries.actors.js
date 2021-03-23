const {createNewDatetime} = require('../../util/util');

module.exports = {
	insertQuery: () => `INSERT INTO actors (name, score, created) VALUES (?, ?, '${createNewDatetime()}')`,
    updateQuery: () => `update actors set name=?, score=?, updated='${createNewDatetime()}' where id=? and updated=?`,
    getActorQuery: () => `SELECT * FROM actors WHERE id=?`,
    getActorsQuery: () => `SELECT * FROM actors`,
    createActorAliasQuery: () => `INSERT INTO actorsAliases (name, created, actorId) VALUES (?, '${createNewDatetime()}', ?)`
}