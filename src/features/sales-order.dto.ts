export type Customer = {
    phone: string;
    email: string;
    dob: string;
    loyalty: string;
};

export type Item = {
    sku: string;
    rate: number;
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
