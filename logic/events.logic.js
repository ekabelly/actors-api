const eventsWrap = require('../db-wrap/events.wrap');

module.exports.createEvent = async event => {
    const eventRes = await eventsWrap.createEvent(event);
    return eventRes;
}

module.exports.updateEvent = async event => {
    const eventRes = await eventsWrap.updateEvent(event);
    return eventRes;
}

module.exports.fetchEventById = async id => {
    const events = await eventsWrap.fetchEventById(id);
    return events;
}

module.exports.fetchEvents = async queryParams => {
    const events = await eventsWrap.fetchEvents(queryParams);
    return events;
}