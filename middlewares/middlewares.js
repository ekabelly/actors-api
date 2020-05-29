const { errHanlder } = require('../middlewares/error-handler');
const errCodes = require('../constants/error-codes');

const resHandler = (data, req, res) => data || data === 0
  ? res.send({ success: true, data }) : errHanlder(errCodes.NO_DATA_FOUND, req, res);

module.exports = {
  resHandler,
  errHanlder
}
;
