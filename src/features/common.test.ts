import { SalesOrder } from './sales-order.dto';

export const payload: SalesOrder = {
    customer: {
        phone: '0773314403',
        email: 'bi@vuanem.com',
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
                sku: null,
                rate: null,
                amount: 257778,
                quantity: 5,
            },
        ],
    },
};
