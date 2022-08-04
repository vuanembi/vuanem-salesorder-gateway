import axios from 'axios';

import { TrackDto } from './klaviyo.dto';

const client = axios.create({ baseURL: 'https://a.klaviyo.com/api/' });
client.interceptors.request.use((req) => {
    req.data = { ...req.data, token: process.env.KLAVIYO_TOKEN };
    return req;
});

export const track = (data: TrackDto) =>
    client.post('track', data).then(({ data }) => data);
