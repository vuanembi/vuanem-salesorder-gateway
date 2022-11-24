import axios from 'axios';

import { UpsertDto } from './insider.dto';

const client = axios.create({
    baseURL: 'https://unification.useinsider.com/api/',
    headers: {
        'X-PARTNER-NAME': 'vuanem',
        'X-REQUEST-TOKEN': process.env.INSIDER_REQUEST_TOKEN || '',
    },
});

export const upsert = async (data: UpsertDto) => {
    return client.post('user/v1/upsert', data);
};
