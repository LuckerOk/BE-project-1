import winston from 'winston';

export const logger = winston.createLogger({
    level:  'debug',
    format: winston.format.json(),
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}
