const adsWrap = require('../db-wrap/ads.wrap');

module.exports.createAd = async ad => {
    const adsRes = await adsWrap.createAd(ad);
    return adsRes;
}

module.exports.updateAd = async ad => {
    const adsRes = await adsWrap.updateAd(ad);
    return adsRes;
}

module.exports.fetchAdById = async id => {
    const adsRes = await adsWrap.fetchAdById(id);
    return adsRes;
}

module.exports.fetchAds = async queryParams => {
    const adsRes = await adsWrap.fetchAds(queryParams);
    return adsRes;
}