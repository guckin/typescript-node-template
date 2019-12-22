import {DiContainer, TYPES} from './di-container';
import {LoggingService} from '../logging/logging.service';

describe('di-container', () => {
    it('provides dependencies', () => {
        singletonIsRegistered(TYPES.LoggingService, LoggingService);
    });

    function singletonIsRegistered(injectionToken: symbol, concreteType: any) {
        const obj = DiContainer.get(injectionToken);
        expect(obj).toBeInstanceOf(concreteType);
        expect(DiContainer.get(injectionToken)).toBe(obj);
    }
});
