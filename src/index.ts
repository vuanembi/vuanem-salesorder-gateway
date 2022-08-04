import { http } from '@google-cloud/functions-framework';
import express from 'express';

import { SalesOrder } from './features/sales-order.dto';
import * as InsiderService from './features/insider/insider.service';
import * as KlaviyoService from './features/klaviyo/klaviyo.service';

const app = express();

app.post('/', (req, res) => {
    const { body }: { body: SalesOrder } = req;

    console.log(body);

    Promise.all(
        [InsiderService.upsert, KlaviyoService.track].map((service) =>
            service(body),
        ),
    )
        .then((result) => {
            console.log(JSON.stringify(result));
            res.status(200).json({ ok: true });
        })
        .catch((err) => res.status(500).json({ err }));
});

http('main', app);
