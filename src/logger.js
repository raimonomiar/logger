const {
  createLogger,
  transports,
  format: {
    timestamp,
    combine,
    printf,
  },
} = require('winston');

const {
  constants: {
    DEFAULT_LOG_LEVEL,
    DEFAULT_LOG_FILE,
  },
} = require('config');

const customFormat = printf(({ level, message, timeStamp }) => `${timeStamp} ${level}: ${message}`);

const logger = createLogger({
  level: DEFAULT_LOG_LEVEL,
  format: combine(
    timestamp(),
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
