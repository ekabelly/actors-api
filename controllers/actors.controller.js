const {createActorService, updateActorService, fetchActorsService, createActorAliasService} = require('../services/actors.service');

const updateActor = actor => updateActorService(actor);

const createActor = actor => createActorService(actor);

const fetchActors = id => fetchActorsService(id);

const createActorAlias = actorAlias => createActorAliasService(actorAlias);

module.exports = {
    updateActor,
    createActor,
    fetchActors,
    createActorAlias
}