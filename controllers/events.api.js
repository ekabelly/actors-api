const express = require('express');
const eventsLogic = require('../logic/events.logic');
const eventsRouter = express.Router();

eventsRouter.post('/', async (req, res, next) => {
    const eventRes = await eventsLogic.createEvent(req.body.event);
    res.send({ success: true, eventId: eventRes.id });
})

module.exports = eventsRouter;