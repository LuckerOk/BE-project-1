import winston from 'winston';

export const logger = winston.createLogger({
    level:  'debug',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'DD-MM-YYYY HH:mm:ss',
        }),
        winston.format.splat(),
        winston.format.json(),
    ),
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
        ),
    }));
}
