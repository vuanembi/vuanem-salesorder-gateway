export type SalesOrderDto = {
    customer: {
        phone: string;
        email: string | null;
        dob: string | null;
        loyalty: string;
    };
    order: {
        createddate: string;
        trandate: string;
        tranid: string;
        items: {
            itemtype: string;
            sku: string | null;
            rate: number | null;
            amount: number;
            quantity: number | null;
        }[];
    };
};
