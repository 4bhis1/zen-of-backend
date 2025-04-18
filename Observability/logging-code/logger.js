// logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, json } = format;

// Custom format: human-friendly logs
const customFormat = printf(({ level, message, timestamp, ...meta }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ''}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    // customFormat
    json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/app.log' }),
    new transports.File({ filename: 'logs/errors.log', level: 'error' })
  ],
});

module.exports = logger;
