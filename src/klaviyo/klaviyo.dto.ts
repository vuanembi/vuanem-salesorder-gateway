export type TrackDto<E, T> = {
    event: E;
    customer_properties: {
        $email: string;
        $phone_number: string;
        dob: string | null;
        loyalty: string;
    };
    properties: {
        $event_id: string;
        $value: number;
    } & T;
};

export type TrackPlacedOrderDto = TrackDto<
    'Placed Order',
    {
        tranid: string;
        trandate: string;
        items: {
            sku: string;
            displayname?: string;
            quantity: number;
            amount: number;
        }[];
    }
>;
