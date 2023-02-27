const errorHandler = (err, req, res) => {
  console.error(`errorHandler  errormessage ||>> ${err.message}`);
  console.error(` errorHandler errorCode ||>> ${err}`);
  err.statusCode = err.status || 500; // eslint-disable-line
  res.status(err.statusCode).send({
    errorcode: err.ErrorCode || 'UnknownError',
    errormessage: err.message,
  });
};

export default errorHandler;
