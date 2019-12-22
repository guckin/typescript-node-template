import {Container} from 'inversify';
import {LoggingService} from '../logging/logging.service';

export const TYPES = {
    LoggingService: Symbol('LoggingService')
};

const container = new Container();

container.bind(TYPES.LoggingService).to(LoggingService).inSingletonScope();

export const DiContainer = container;
