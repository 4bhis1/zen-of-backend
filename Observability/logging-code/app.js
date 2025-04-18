// app.js
const express = require('express');
const logger = require('./logger');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

// Middleware: attach a correlation ID to every request
app.use((req, res, next) => {
  req.id = uuidv4();
  logger.info(`Incoming request: ${req.method} ${req.url}`, {
    requestId: req.id,
    ip: req.ip,
    userAgent: req.get('User-Agent')
  });
  next();
});

// Example route
app.get('/', (req, res) => {
  logger.info('Root endpoint hit', { requestId: req.id });
  res.send('Hello, world!');
});

// Route with error
app.get('/error', (req, res) => {
  try {
    throw new Error('Something went wrong!');
  } catch (error) {
    logger.error('Error encountered', {
      requestId: req.id,
      message: error.message,
      stack: error.stack
    });
    res.status(500).send('Internal Server Error');
  }
});

// Middleware: catch unhandled errors
app.use((err, req, res, next) => {
  logger.error('Unhandled error', {
    requestId: req.id,
    message: err.message,
    stack: err.stack
  });
  res.status(500).send('Unexpected Error');
});

app.listen(3000, () => {
  logger.info('Server started on port 3000');
});
