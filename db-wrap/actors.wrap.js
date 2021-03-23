const { insertQuery, updateQuery, getActorQuery, getActorsQuery, createActorAliasQuery } = require('./queries/queries.actors');
const conn = require('./conn');
const { promiseWrap } = require('../util/util');

const createActorWrap = async actor => promiseWrap(promiseHandler =>
    conn.query(insertQuery(), [actor.name, actor.score], promiseHandler));

const updateActorWrap = actor => promiseWrap(promiseHandler =>
    conn.query(updateQuery(), [actor.name, actor.score, actor.id, actor.updated], promiseHandler));


const getActor = id => promiseWrap(promiseHandler =>
    conn.query(getActorQuery(), [id], promiseHandler))

const getActors = () => promiseWrap(promiseHandler =>
    conn.query(getActorsQuery(), promiseHandler))

const getActorsWrap = id => {
    if (id) {
        return getActor(id);
    }
    return getActors();
}

const createActorAliasWrap = actorAlias => promiseWrap(promiseHandler =>
    conn.query(createActorAliasQuery(), [actorAlias.name, actorAlias.actorId], (err, data) =>
        promiseHandler(err, data, actorAlias.actorId)))

module.exports = {
    createActorWrap,
    updateActorWrap,
    getActorsWrap,
    createActorAliasWrap
}