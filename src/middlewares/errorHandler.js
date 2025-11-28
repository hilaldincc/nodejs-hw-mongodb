import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  console.error('ACTUAL ERROR:', {
    message: err.message,
    stack: err.stack,
  });
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err.message,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
