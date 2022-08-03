import { http } from '@google-cloud/functions-framework';
import express from 'express';

import { SalesOrder } from './features/sales-order.dto';
import * as InsiderService from './features/insider/insider.service';

const app = express();

app.post('/', (req, res) => {
    const { body }: { body: SalesOrder } = req;

    Promise.all([InsiderService.upsert].map((service) => service(body)))
        .then(() => res.status(200).json({ ok: true }))
        .catch((err) => res.status(500).json({ err }));
});

http('main', app);
