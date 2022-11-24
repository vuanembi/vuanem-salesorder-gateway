import { range, sumBy } from 'lodash';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

import { SalesOrderDto } from './sales-order.dto';
import { UpsertDto } from '../insider/insider.dto';
import * as InsiderService from '../insider/insider.service';
import { TrackPlacedOrderDto } from '../klaviyo/klaviyo.dto';
import * as KlaviyoService from '../klaviyo/klaviyo.service';

export const toUSD = (value: number) => value / 23350;

export const toDate = (value: string) =>
    dayjs.utc(value).tz('Asia/Ho_Chi_minh').format('YYYY-MM-DD');

export const upsertInsiderPurchase = ({ customer, order }: SalesOrderDto) => {
    const upsertDto: UpsertDto = {
        users: [
            {
                identifiers: {
                    uuid: customer.phone,
                    email: customer.email || undefined,
                    phone_number: '+84' + customer.phone.slice(1),
                },
                attributes: {
                    birthday: customer.dob,
                    custom: { loyalty: customer.loyalty },
                },
                events: order.items.flatMap((item) => {
                    const { quantity, itemtype } = item;

                    return itemtype === 'InvtPart' && quantity
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
                }),
            },
        ],
    };

    return InsiderService.upsert(upsertDto);
};

export const trackKlaviyoPlacedOrder = ({ customer, order }: SalesOrderDto) => {
    if (!customer.email) {
        return;
    }

    const trackDto: TrackPlacedOrderDto = {
        event: 'Placed Order',
        customer_properties: {
            $email: 'bi@vuanem.com',
            $phone_number: '+84' + customer.phone.slice(1),
            dob: customer.dob ? toDate(customer.dob) : null,
            loyalty: customer.loyalty,
        },
        properties: {
            $event_id: order.tranid,
            $value: toUSD(sumBy(order.items, (item) => item.amount)),
            tranid: order.tranid,
            trandate: toDate(order.trandate),
            items: order.items.map((item) => ({
                name: item.sku,
                quantity: item.quantity || 0,
                amount: item.amount,
            })),
        },
    };

    console.log(JSON.stringify(trackDto));

    return KlaviyoService.track(trackDto);
};
