import winston from 'winston';

export const logger = winston.createLogger({
    level:  'error',
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.json(),
    ),
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        level:  'debug',
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
        ),
    }));
}
if (process.env.NODE_ENV !== 'test') {
    logger.add(new winston.transports.File({
        filename: 'logs/errors.log',
        format:   winston.format.simple(),
    }));
}
