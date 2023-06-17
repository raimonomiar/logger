const {
  createLogger,
  transports,
  format: {
    timestamp: time,
    combine,
    printf,
  },
} = require('winston');

const {
  constants: {
    DEFAULT_LOG_LEVEL,
    DEFAULT_LOG_FILE,
    DEFAULT_TIME_FORMAT,
  },
} = require('config');

const customFormat = printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`);

const logger = createLogger({
  level: DEFAULT_LOG_LEVEL,
  format: combine(
    time({
      format: DEFAULT_TIME_FORMAT,
    }), 
    customFormat,
  ),
  transports: [
    new transports.File({
      filename: DEFAULT_LOG_FILE,
    }),
  ],
});

const info = (message) => {
  logger.info(message);
};

const debug = (message) => {
  logger.debug(message);
};

const error = (message, stack) => {
  logger.error(`${message}\n${stack}`);
};

module.exports = {
  info,
  debug,
  error,
};
