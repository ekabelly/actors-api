const { createActorWrap, updateActorWrap, getActorsWrap,createActorAliasWrap } = require('../db-wrap/actors.wrap');
const { UNKNOWN_ERROR, NO_DATA_FOUND } = require('../constants/error-codes');

const updateActorService = async actor => {
    const res = await updateActorWrap(actor);
    if (res.affectedRows === 1) {
        return { affectedRows: res.affectedRows };
    }
    throw new Error(UNKNOWN_ERROR);
}

const createActorService = async actor => {
    const res = await createActorWrap(actor);
    if(res && res.affectedRows > 0) {
        return res;
    }
    throw new Error(UNKNOWN_ERROR);
}

const fetchActorsService = async id => {
    const res = await getActorsWrap(id);
    if (res && res.length < 1) {
        throw new Error(NO_DATA_FOUND);
    }
    return res;
};

const createActorAliasService = async actorAlias => {
    const res = await createActorAliasWrap(actorAlias);
    if(res && res.affectedRows > 0) {
        return res;
    }
    throw new Error(UNKNOWN_ERROR);
}

module.exports = {
    updateActorService,
    createActorService,
    fetchActorsService,
    createActorAliasService
}