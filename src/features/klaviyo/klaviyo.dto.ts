export type Customer = {
    $email: string;
    $phone_number: string;
    dob: string | null;
    loyalty: string;
};

export type Event = {
    $event_id: string;
    $value: number;
    tranid: string;
    trandate: string;
    items: {
        name: string | null;
        quantity: number;
        amount: number;
    }[];
};

export type TrackDto = {
    event: string;
    customer_properties: Customer;
    properties: Event;
};
