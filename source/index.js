// Core
import debug from 'debug';

// Instruments
import { app } from './server';
import { getPort } from './utils';
import { logger } from './middlewares';

// DB
import './db';

import * as routers from './routers';

const PORT = getPort();
const dg = debug('server:main');

app.use((req, res, next) => {
    logger.debug(`${new Date().toISOString()} ${req.method} ${JSON.stringify(req.body)}`);

    next();
});

app.use('/', routers.auth);
app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

app.use((err, req, res, next) => {
    logger.error(`${new Date().toISOString()} ${err.name}: ${err.message}`);

    res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
    dg(`Server API is up on port ${PORT}`);
});
