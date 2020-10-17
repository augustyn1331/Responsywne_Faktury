export interface IInvoice {
    id: string;
    invoiceNumber: string;
    seller: string;
    sellerNIP: string;
    sellerAddress: string;
    accountNumber: string;
    customer: string;
    customerNIP: string;
    customerAddress: string;
    date: Date;
    dueDate: Date;
    net: number;
    gross: number;
    currency: string;
    comments: string;
    paymentMethod: string;
    paymentDate: string;
    symbol: string;
    gtu: string;
}