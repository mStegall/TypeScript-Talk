import * as express from 'express';
import * as body from 'body-parser';
import {router} from './router';


var app = express();

app.use(body.json());

app.use('/', router);

app.listen(3000, function () {
    console.log('Server started');
});