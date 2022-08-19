import { sumBy } from 'lodash';

import { SalesOrder } from '../sales-order.dto';
import { Customer, Event } from './klaviyo.dto';
import * as KlaviyoRepo from './klaviyo.repo';
import { toUSD, toDate } from '../utils';

export const track = ({ customer, order }: SalesOrder) => {
    if (!customer.email) return Promise.resolve(null);

    const customerProperties: Customer = {
        $email: 'bi@vuanem.com',
        $phone_number: '+84' + customer.phone.slice(1),
        dob: customer.dob ? toDate(customer.dob) : null,
        loyalty: customer.loyalty,
    };

    const event: Event = {
        $event_id: order.tranid,
        $value: toUSD(sumBy(order.items, (item) => item.amount)),
        tranid: order.tranid,
        trandate: toDate(order.trandate),
        items: order.items.map((item) => ({
            name: item.sku,
            quantity: item.quantity || 0,
            amount: item.amount,
        })),
    };

    return KlaviyoRepo.track({
        event: 'Placed Order',
        customer_properties: customerProperties,
        properties: event,
    });
};
