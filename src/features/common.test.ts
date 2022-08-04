import { SalesOrder } from './sales-order.dto';

export const payload: SalesOrder = {
    customer: {
        phone: '0785356303',
        email: null,
        dob: '1992-02-28T08:00:00.000Z',
        loyalty: 'SILVER',
    },
    order: {
        createddate: '2022-08-04T09:45:00.000Z',
        trandate: '2022-08-04T07:00:00.000Z',
        tranid: 'SOHMI44-KC00000541',
        items: [
            {
                itemtype: 'InvtPart',
                sku: '1103001001011',
                rate: 8140000,
                amount: 7537037,
                quantity: 1,
            },
            {
                itemtype: 'Discount',
                sku: 'Discount: 15 %',
                rate: -15,
                amount: -1130556,
                quantity: null,
            },
            {
                itemtype: 'InvtPart',
                sku: '1301008998001',
                rate: 790000,
                amount: 731481,
                quantity: 1,
            },
            {
                itemtype: 'Discount',
                sku: 'Discount: 100 %',
                rate: -100,
                amount: -731481,
                quantity: null,
            },
        ],
    },
};
