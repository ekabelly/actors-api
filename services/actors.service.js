const { createActorRepo, updateActorRepo, getActorsRepo, createActorAliasRepo, fetchActorAliasesRepo } = require('../repository/actors.repo');
const { UNKNOWN_ERROR, NO_DATA_FOUND } = require('../constants/error-codes');

const updateActorService = async actor => {
    const res = await updateActorRepo(actor);
    if (res && res.affectedRows === 1) {
        return { affectedRows: res.affectedRows };
    }
    throw new Error(UNKNOWN_ERROR);
}

const createActorService = async actor => {
    const res = await createActorRepo(actor);
    if(res && res.affectedRows === 1) {
        return res;
    }
    throw new Error(UNKNOWN_ERROR);
}

const fetchActorsService = async id => {
    const res = await getActorsRepo(id);
    if (res && res.length < 1) {
        throw new Error(NO_DATA_FOUND);
    }
    return res[0];
};

const createActorAliasService = async actorAlias => {
    const res = await createActorAliasRepo(actorAlias);
    if(res && res.affectedRows === 1) {
        return res;
    }
    throw new Error(UNKNOWN_ERROR);
}

const fetchActorAliasesService = async id => {
    const res = await fetchActorAliasesRepo(id);
    if(res && res.length > 0) {
        return res;
    }
    throw new Error(UNKNOWN_ERROR);
}

module.exports = {
    updateActorService,
    createActorService,
    fetchActorsService,
    createActorAliasService,
    fetchActorAliasesService
}