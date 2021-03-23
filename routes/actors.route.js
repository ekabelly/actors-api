const express = require('express');
const actorsController = require('../controllers/actors.controller');
const actorsRoute = express.Router();

const { resHandler } = require('../middlewares/middlewares');

// update actor
actorsRoute.put('/:id', async (req, res, next) => {
    try {
        const actorRes = await actorsController.updateActor({ ...req.body.actor, id: req.params.id });
        resHandler(actorRes, req, res);
    } catch (e) {
        next(e);
    }
});

// create actor
actorsRoute.post('/', async (req, res, next) => {
    try {
        const actorRes = await actorsController.createActor(req.body.actor);
        resHandler(actorRes, req, res);
    } catch (e) {
        next(e);
    }
});

// get actor by id or actors
actorsRoute.get('/:id?', async (req, res, next) => {
    try {
        const actors = await actorsController.fetchActors(req.params.id);
        resHandler(actors, req, res);
    } catch (e) {
        next(e);
    }
});


// create actor alias
actorsRoute.post('/:id/alias', async (req, res, next) => {
    try {
        const actors = await actorsController
            .createActorAlias({ ...req.body.actorAlias, actorId: req.params.id });
        resHandler(actors, req, res);
    } catch (e) {
        next(e);
    }
});

module.exports = actorsRoute;