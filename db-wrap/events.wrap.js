const Events = require('../models/event.model');

module.exports.updateEvent = async event => {
    const eventRes = await Events.findOneAndUpdate({ _id: event.id }, {
        ...event,
        metaData: {
            ...event.metaData,
            lastUpdated: new Date()
        }
    }, {
        upsert: false,
        new: true,
        useFindAndModify: false
    }).lean();
    return eventRes;
}

module.exports.createEvent = async event => {
    const eventRes = await new Events({
        ...event, 
        metaData: {
            ...event.metaData,
            createdAt: new Date(),
            lastUpdated: new Date()
        }
    }).save();
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