import * as express from 'express';

import {router} from './router';

var app = express();

app.use('/', router);

app.listen(3000, function () {
    console.log('Server started');
});