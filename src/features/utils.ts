import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const toUSD = (value: number) => value / 23350;

export const toDate = (value: string) =>
    dayjs.utc(value).tz('Asia/Ho_Chi_minh').format('YYYY-MM-DD');
