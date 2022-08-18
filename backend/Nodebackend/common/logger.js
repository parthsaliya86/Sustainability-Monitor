const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
 
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});


const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    myFormat
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new (transports.Console)({
        colorize: 'all'
    }),
    new transports.File({ filename: 'error.log', level: 'Error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});
 


module.exports = logger