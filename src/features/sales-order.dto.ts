export type Customer = {
    phone: string;
    email: string | null;
    dob: string | null;
    loyalty: string;
};

export type Item = {
    itemtype: string;
    sku: string | null;
    rate: number | null;
    amount: number;
    quantity: number;
};

export type SalesOrder = {
    customer: Customer;
    order: {
        createddate: string;
        tranid: string;
        items: Item[];
    };
};
