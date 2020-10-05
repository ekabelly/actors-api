const express = require('express');
const eventsLogic = require('../logic/events.logic');
const eventsRouter = express.Router();

const { resHandler } = require('../middlewares/middlewares');

// create event
eventsRouter.post('/', async (req, res, next) => {
    try {
        const eventRes = await eventsLogic.createEvent(req.body.event);
        resHandler(eventRes, req, res);
    } catch (e) {
        next(e);
    }
});

// update event property
eventsRouter.patch('/:id', async (req, res, next) => {
    try {
        const eventRes = await eventsLogic.updateEvent({...req.body.event, id: req.params.id});
        resHandler(eventRes, req, res);
    } catch (e) {
        next(e);
    }
});

// update event
eventsRouter.put('/:id', async (req, res, next) => {
    try {
        const eventRes = await eventsLogic.updateEvent({...req.body.event, id: req.params.id});
        resHandler(eventRes, req, res);
    } catch (e) {
        next(e);
    }
});

// get event by id
eventsRouter.get('/:id', async (req, res, next) => {
    try {
        const events = await eventsLogic.fetchEventById(req.params.id);
        resHandler(events, req, res);
    } catch (e) {
        next(e);
    }
});

// get events
eventsRouter.get('/', async (req, res, next) => {
    try {
        const events = await eventsLogic.fetchEvents(req.query);
        resHandler(events, req, res);
    } catch (e) {
        next(e);
    }
});

module.exports = eventsRouter;