const {createActorService, updateActorService, fetchActorsService, createActorAliasService, fetchActorAliasesService} = require('../services/actors.service');

const updateActor = actor => updateActorService(actor);

const createActor = actor => createActorService(actor);

const fetchActors = id => fetchActorsService(id);

const createActorAlias = actorAlias => createActorAliasService(actorAlias);

const fetchActorAliases = id => fetchActorAliasesService(id)

module.exports = {
    updateActor,
    createActor,
    fetchActors,
    createActorAlias,
    fetchActorAliases
}