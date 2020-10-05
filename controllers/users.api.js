const express = require('express');
const usersLogic = require('../logic/users.logic');
const usersRouter = express.Router();

const { resHandler } = require('../middlewares/middlewares');

// update user property
usersRouter.patch('/:id', async (req, res, next) => {
    try {
        const userRes = await usersLogic.updateUser({...req.body.user, id: req.params.id});
        resHandler(userRes, req, res);
    } catch (e) {
        next(e);
    }
});

// update user
usersRouter.put('/:id', async (req, res, next) => {
    try {
        const userRes = await usersLogic.updateUser({...req.body.user, id: req.params.id});
        resHandler(userRes, req, res);
    } catch (e) {
        next(e);
    }
});

// create user
usersRouter.post('/', async (req, res, next) => {
    try {
        const userRes = await usersLogic.createUser(req.body.user);
        resHandler(userRes, req, res);
    } catch (e) {
        next(e);
    }
});

module.exports = usersRouter;