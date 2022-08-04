import { range } from 'lodash';

import { SalesOrder } from '../sales-order.dto';
import { Identifiers, Attributes, Event } from './insider.dto';
import * as InsiderRepo from './insider.repo';

export const upsert = ({ customer, order }: SalesOrder) => {
    const identifiers: Identifiers = {
        uuid: customer.phone,
        email: customer.email,
        phone_number: '+84' + customer.phone.slice(1),
    };

    const attributes: Attributes = {
        birthday: customer.dob,
        custom: { loyalty: customer.loyalty },
    };

    const events: Event[] = order.items.flatMap((item) => {
        const { quantity, itemtype } = item;

        return itemtype === 'InvtPart'
            ? range(quantity).map(() => ({
                  event_name: 'purchase',
                  timestamp: order.createddate,
                  event_params: {
                      product_id: item.sku,
                      unit_price: item.rate || item.amount / quantity,
                      unit_sale_price: item.amount / quantity,
                      event_group_id: order.tranid,
                      currency: 'VND',
                  },
              }))
            : [];
    });

    return InsiderRepo.upsert({ users: [{ identifiers, attributes, events }] });
};
