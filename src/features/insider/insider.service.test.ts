import { payload } from '../common.test';
import * as InsiderService from './insider.service';

it('Upsert', async () => {
    return InsiderService.upsert(payload).then((res) => {
        expect(res.data.data.sucessful?.count).toBe(1);
    });
});
