import * as InsiderService from './insider.service';

it('Upsert', async () => {
    const payload = {
        customer: {
            phone: '0773314403',
            email: null,
            dob: '2022-01-01T08:00:00.000Z',
            loyalty: 'SILVER',
        },
        order: {
            createddate: '2022-08-04T04:48:00.000Z',
            trandate: '2022-08-02T07:00:00.000Z',
            tranid: 'SOHNIBI-KC00001998',
            items: [
                {
                    itemtype: 'InvtPart',
                    sku: '1301001010002',
                    rate: null,
                    amount: 257778,
                    quantity: 5,
                },
                {
                    itemtype: 'Discount',
                    sku: '1301001010002',
                    rate: null,
                    amount: 257778,
                    quantity: 5,
                },
            ],
        },
    };

    return InsiderService.upsert(payload).then((res) => {
        expect(res.status).toBe(200);
    });
});
