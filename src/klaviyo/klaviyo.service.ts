import axios from 'axios';

import { TrackDto } from './klaviyo.dto';

const client = axios.create({
    baseURL: 'https://a.klaviyo.com/api/',
});

client.interceptors.request.use((config) => {
    const { data } = config;
    return { ...config, data: { token: process.env.KLAVIYO_TOKEN, ...data } };
});

client.interceptors.response.use((response) => {
    return response.data === 0 ? Promise.reject(response) : response;
});

export const track = async <E, T>(data: TrackDto<E, T>) => {
    return client.post('track', data);
};
