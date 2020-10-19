const express = require('express');
const adsLogic = require('../logic/ads.logic');
const adsRouter = express.Router();

const { resHandler } = require('../middlewares/middlewares');

// create ad
adsRouter.post('/', async (req, res, next) => {
    try {
        const adRes = await adsLogic.createAd(req.body.ad);
        resHandler(adRes, req, res);
    } catch (e) {
        next(e);
    }
});

// update ad property
adsRouter.patch('/:id', async (req, res, next) => {
    try {
        const adRes = await adsLogic.updateAd({...req.body.ad, id: req.params.id});
        resHandler(adRes, req, res);
    } catch (e) {
        next(e);
    }
});

// update ad
adsRouter.put('/:id', async (req, res, next) => {
    try {
        const adRes = await adsLogic.updateAd({...req.body.ad, id: req.params.id});
        resHandler(adRes, req, res);
    } catch (e) {
        next(e);
    }
});

// get ad by id
adsRouter.get('/:id', async (req, res, next) => {
    try {
        const ads = await adsLogic.fetchAdById(req.params.id);
        resHandler(ads, req, res);
    } catch (e) {
        next(e);
    }
});

// get ads
adsRouter.get('/', async (req, res, next) => {
    try {
        const ads = await adsLogic.fetchAds(req.query);
        resHandler(ads, req, res);
    } catch (e) {
        next(e);
    }
});

module.exports = adsRouter;