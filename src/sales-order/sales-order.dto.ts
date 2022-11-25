export type SalesOrderDto = {
    customer: {
        phone?: string;
        email?: string;
        dob?: string;
        loyalty: string;
    };
    order: {
        createddate: string;
        trandate: string;
        tranid: string;
        items: {
            itemtype: string;
            sku: string;
            displayname?: string;
            grossamt: number;
            amount: number;
            quantity?: number | null;
        }[];
    };
};
