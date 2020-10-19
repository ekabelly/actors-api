const Ad = require('../models/ad.model');

module.exports.updateAd = async event => {
    const adsRes = await Ad.findOneAndUpdate({ _id: event.id }, event, {
        upsert: false,
        new: true,
        useFindAndModify: false
    }).lean();
    return adsRes;
}

module.exports.createAd = async ad => {
    const adsRes = await new Ad(ad).save();
    return adsRes;
}

module.exports.fetchAds = async () => {
    const adsRes = await Ad.find({}).lean();
    return adsRes;
}

module.exports.fetchAdById = async id => {
    const adsRes = await Ad.findById({ _id: id }).lean();
    return adsRes;
}