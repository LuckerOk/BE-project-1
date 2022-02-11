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
    logger.debug(`${req.method} ${JSON.stringify(req.body)}`);

    next();
});

app.use('/', routers.auth);
app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);

app.listen(PORT, () => {
    dg(`Server API is up on port ${PORT}`);
});
