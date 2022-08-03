import * as InsiderService from './insider.service';

it('Upsert', async () => {
    const payload = {
        customer: {
            phone: '0773314403',
            email: 'hieu.mai@vuanem.com.vn',
            dob: '1998-10-31T08:00:00.000Z',
            loyalty: 'SILVER',
        },
        order: {
            createddate: '2021-04-02T03:49:00.000Z',
            tranid: 'SOHNI11-KC00005457',
            items: [
                {
                    sku: '1104005001003',
                    rate: 4950000,
                    amount: 4500000,
                    quantity: 1,
                },
                {
                    sku: '1301001010002',
                    rate: 125000,
                    amount: 113636,
                    quantity: 1,
                },
            ],
        },
    };

    return InsiderService.upsert(payload).then((res) => {
        expect(res.status).toBe(200);
    });
});
