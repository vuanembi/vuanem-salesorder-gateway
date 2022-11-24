export type UpsertDto = {
    users: {
        identifiers: {
            uuid: string;
            phone_number: string;
            email?: string;
        };
        attributes: {
            birthday: string | null;
            custom: {
                loyalty: string;
            };
        };
        events: {
            event_name: string;
            timestamp: string;
            event_params: {
                product_id: string | null;
                unit_price: number;
                unit_sale_price: number;
                event_group_id: string;
                currency: string;
            };
        }[];
    }[];
};
