const eventsWrap = require('../db-wrap/events.wrap');

module.exports.createEvent = async event => {
    const eventRes = await eventsWrap.createEvent(event);
    return eventRes;
}