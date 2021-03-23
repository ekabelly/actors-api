const express = require('express');
const actorsController = require('../controllers/actors.controller');
const actorsRoute = express.Router();

const { resHandler } = require('../middlewares/middlewares');

// update actor
actorsRoute.put('/:id', async ({body, params}, res, next) => {
    try {
        const actorRes = await actorsController.updateActor({ ...body.actor, id: params.id });
        resHandler(actorRes, res);
    } catch (e) {
        next(e);
    }
});

// create actor
actorsRoute.post('/', async ({body}, res, next) => {
    try {
        const actorRes = await actorsController.createActor(body.actor);
        resHandler(actorRes, res);
    } catch (e) {
        next(e);
    }
});

// get actor by id or actors
actorsRoute.get('/:id?', async ({params}, res, next) => {
    try {
        const actors = await actorsController.fetchActors(params.id);
        resHandler(actors, res);
    } catch (e) {
        next(e);
    }
});


// create actor alias
actorsRoute.post('/:id/alias', async ({body, params}, res, next) => {
    try {
        const actors = await actorsController
            .createActorAlias({ ...body.actorAlias, actorId: params.id });
        resHandler(actors, res);
    } catch (e) {
        next(e);
    }
});

// get actor aliases
actorsRoute.get('/:id/alias', async ({params}, res, next) => {
    try {
        const actors = await actorsController.fetchActorAliases(params.id);
        resHandler(actors, res);
    } catch (e) {
        next(e);
    }
});

module.exports = actorsRoute;