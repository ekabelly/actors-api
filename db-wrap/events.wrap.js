const Events = require('../models/event.model');

const defaultWrapperOptions =  {
    upsert: true,
    new: true,
    useFindAndModify: false
}

module.exports.createEvent = async event => {
    if(!event.id) {
        event = new Events(event);
    }
    const eventRes = await Events.findOneAndUpdate({ _id: event.id }, event, defaultWrapperOptions).lean();
    return eventRes;
}