const errorCodes = require('../constants/error-codes');

module.exports = {
  errHanlder (err, req, res) {
    let errorCode = err;

    if (!errorCodes[err]) {
      // in case the error is not standard log the error
      console.log(`The following error has occurred: ${JSON.stringify(err)}`);
      errorCode = errorCodes.UNKNOWN_ERROR;
    }

    // send the error code to the client
    res.send((500), {
      errorCode,
      success: false
    });
  }
};
