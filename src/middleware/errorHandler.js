const errorHandler = (err, req, res, next) => {
  console.error('[ERROR HANDLER]:', err.stack);

  let statusCode = err.statusCode || 500;
  let message = err.message || 'Terjadi kesalahan pada server';

  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(', ');
  }

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404;
    message = `Resource tidak ditemukan. Format ID salah.`;
  }

  res.status(statusCode).json({
    message: message,
  });
};

module.exports = errorHandler;