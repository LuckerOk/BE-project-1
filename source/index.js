// Core
import debug from 'debug';

// Instruments
import { app } from './server';
import { getPort } from './utils';

// DB
import './db';

import * as routers from './routers';

const PORT = getPort();
const dg = debug('server:main');

app.use('/', routers.auth);
app.use('/users', routers.users);
app.use('/classes', routers.classes);
app.use('/lessons', routers.lessons);
app.use('/', routers.education);

app.listen(PORT, () => {
    dg(`Server API is up on port ${PORT}`);
});
