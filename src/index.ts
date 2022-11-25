import { http } from '@google-cloud/functions-framework';
import express from 'express';

import { SalesOrderDto } from './sales-order/sales-order.dto';
import { upsertInsiderPurchase, trackKlaviyoPlacedOrder } from './sales-order/sales-order.service';

const app = express();

app.post('/', (req, res) => {
    const { body }: { body: SalesOrderDto } = req;

    console.log('body', JSON.stringify(body));

    const services = [upsertInsiderPurchase, trackKlaviyoPlacedOrder];

    Promise.allSettled(services.map((service) => service(body))).then((result) => {
        console.log('result', JSON.stringify(result));
        res.status(200).json({ result });
    });
});

http('main', app);
