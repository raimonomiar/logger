module.exports = {
  constants: {
    DEFAULT_LOG_LEVEL: 'info',
    DEFAULT_LOG_FILE: process.env.LOG_FILE_PATH ?? 'log/app.log',
    DEFAULT_TIME_FORMAT: 'YYYY-MM-DD HH:mm:ss',
  },
};
