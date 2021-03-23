const { insertQuery, updateQuery, getActorQuery, getActorsQuery, createActorAliasQuery, getActorAliases } = require('./queries/queries.actors');
const conn = require('./conn');
const { promiseWrap } = require('../util/util');

const createActorRepo = async actor => promiseWrap(promiseHandler =>
    conn.query(insertQuery(), [actor.name, actor.score], promiseHandler));

const updateActorRepo = actor => promiseWrap(promiseHandler =>
    conn.query(updateQuery(), [actor.name, actor.score, actor.id, actor.updated], promiseHandler));


const getActor = id => promiseWrap(promiseHandler =>
    conn.query(getActorQuery(), [id], promiseHandler))

const getActors = () => promiseWrap(promiseHandler =>
    conn.query(getActorsQuery(), promiseHandler))

const getActorsRepo = id => {
    if (id) {
        return getActor(id);
    }
    return getActors();
}

const createActorAliasRepo = actorAlias => promiseWrap(promiseHandler =>
    conn.query(createActorAliasQuery(), [actorAlias.name, actorAlias.actorId], (err, data) =>
        promiseHandler(err, data, actorAlias.actorId)));

const fetchActorAliasesRepo = id => promiseWrap(promiseHandler => 
    conn.query(getActorAliases(), [id], promiseHandler));

module.exports = {
    createActorRepo,
    updateActorRepo,
    getActorsRepo,
    createActorAliasRepo,
    fetchActorAliasesRepo
}