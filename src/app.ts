import * as http from 'http';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';

import initializeDb from './db';
import config from './config';
import api from './api';

const app = express();
const server = http.createServer(app);

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.json({
    limit : config.bodyLimit
}));

initializeDb( () => {
    app.use('/api', api());
    server.listen(config.port);
});

export default app;
