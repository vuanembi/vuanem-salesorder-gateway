export type Identifiers = {
    uuid: string;
    phone_number: string;
    email: string | null;
};

export type Attributes = {
    birthday: string | null;
    custom: {
        loyalty: string;
    };
};

export type Event = {
    event_name: string;
    timestamp: string;
    event_params: {
        product_id: string | null;
        unit_price: number;
        unit_sale_price: number;
        event_group_id: string;
        currency: string;
    };
};

export type UpsertDto = {
    users: {
        identifiers: Identifiers;
        attributes: Attributes;
        events: Event[];
    }[];
};
