import { http } from '@google-cloud/functions-framework';
import express from 'express';

import { SalesOrderDto } from './sales-order/sales-order.dto';
import { upsertInsiderPurchase, trackKlaviyoPlacedOrder } from './sales-order/sales-order.service';

const app = express();

app.post('/', (req, res) => {
    const { body }: { body: SalesOrderDto } = req;

    console.log('body', JSON.stringify(body));

    const services = [upsertInsiderPurchase, trackKlaviyoPlacedOrder];

    Promise.allSettled(services.map((service) => service(body))).then((results) => {
        const response = results.map((result) => result.status);
        res.status(200).json({ response });
    });
});

http('main', app);
