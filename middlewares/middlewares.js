const { errHandler: errHandler } = require('../middlewares/error-handler');
const errCodes = require('../constants/error-codes');

const resHandler = (data, res) => !!data || data === 0
  ? res.send({ success: true, data }) : errHandler({ name: errCodes.UNKNOWN_ERROR }, res);

module.exports = {
  resHandler,
  errHandler
}
;
