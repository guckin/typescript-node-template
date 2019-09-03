import {Router} from 'express';
import healhCheck from './routes/healthCheck';

export default () => {
    const api = Router();
    healhCheck(api);
    return api;
};
