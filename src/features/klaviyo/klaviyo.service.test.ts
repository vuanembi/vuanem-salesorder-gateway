import { payload } from '../common.test';

import * as KlaviyoService from './klaviyo.service';

describe('Klaviyo', () => {
    it('Pass', async () => {
        const _payload = { ...payload };
        _payload.customer.email = null;

        return KlaviyoService.track(_payload).then((res) => {
            expect(res).toBe(null);
        });
    });

    it('Track', async () => {
        return KlaviyoService.track(payload).then((res) => {
            expect(res?.data).toBe(1);
        });
    });
});
