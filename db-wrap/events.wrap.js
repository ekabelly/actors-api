const Events = require('../models/event.model');

module.exports.updateEvent = async event => {
    const eventRes = await Events.findOneAndUpdate({ _id: event.id }, event, {
        upsert: false,
        new: true,
        useFindAndModify: false
    }).lean();
    return eventRes;
}

module.exports.createEvent = async event => {
    const eventRes = await new Events(event).save();
    return eventRes;
}

module.exports.fetchEvents = async () => {
    const events = await Events.find({}).lean();
    return events;
}

module.exports.fetchEventById = async id => {
    const event = await Events.findById({ _id: id }).lean();
    return event;
}