import { v4 as uuid4 } from 'uuid';

import { SalesOrderDto } from './sales-order.dto';
import { upsertInsiderPurchase, trackKlaviyoPlacedOrder } from './sales-order.service';

export const payload: SalesOrderDto = {
    order: {
        createddate: '2021-04-02T03:49:00.000Z',
        trandate: '2021-04-02T07:00:00.000Z',
        tranid: uuid4(),
        shipaddress:
            'Anh Lê Văn Tân\nHH 11-18 - Khu ĐT Vinhomes Star City\nThanh Hóa, Thanh Hóa,  \nVietnam',
        items: [
            {
                itemtype: 'InvtPart',
                sku: '1104005001003',
                displayname: 'Đệm Massage Nhật Bản Color Foam Goodnight 180*200*09',
                grossamt: 4950000,
                amount: 4500000,
                quantity: 1,
            },
            {
                itemtype: 'Discount',
                sku: 'Discount: 20 %',
                grossamt: -990000,
                amount: -900000,
            },
            {
                itemtype: 'InvtPart',
                sku: '1301001010002',
                displayname: 'Ruột gối Doona Promo 45*65*700gr 920',
                grossamt: 125000,
                amount: 113636,
                quantity: 1,
            },
            {
                itemtype: 'Discount',
                sku: 'Coupon - Fixed Amount 641 MAR',
                grossamt: -116001,
                amount: -105455,
            },
        ],
    },
    customer: {
        phone: '0773314403',
        email: 'hieu.mai@vuanem.com.vn',
        dob: '1998-10-31T08:00:00.000Z',
        loyalty: 'SILVER',
    },
};

it('Upsert Insider Purchase', async () => {
    const res = await upsertInsiderPurchase(payload);

    if (!res) {
        return;
    } else {
        console.log(res.data);
        expect(res.status).toBe(200);
        return;
    }
});

it('Track Klaviyo Placed Order', async () => {
    const res = await trackKlaviyoPlacedOrder(payload);

    if (!res) {
        return;
    } else {
        console.log(res.data);
        expect(res.status).toBe(200);
        return;
    }
});
