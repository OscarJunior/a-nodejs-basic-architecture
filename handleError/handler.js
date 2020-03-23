function logError(err) {
  console.info(JSON.stringify(err));

  return Promise.resolve();
}

function DefaultErrorHandler() {
  this.handleError = async (err) => {
    await logError(err);

    if (!err.isOperational) {
      process.exit(1);
    }
  };
}

module.exports = {
  handler: new DefaultErrorHandler(),
};
