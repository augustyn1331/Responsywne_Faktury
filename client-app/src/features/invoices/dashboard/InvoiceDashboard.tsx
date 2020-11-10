import React from "react";
import { IInvoice } from "../../../app/models/invoice";
import { InvoiceList } from "./InvoiceList";

interface IProps {
    invoices: IInvoice[]
}




export const InvoiceDashboard: React.FC<IProps> = ({invoices}) => {
  return (
    <div></div>
      // <Grid>
      //   <Grid.Column>
      //     <InvoiceList invoices={invoices}></InvoiceList>
      //     {/* <List>
      //       {invoices.map((invoice) => (
      //         <List.Item key={invoice.id}>{invoice.invoiceNumber}</List.Item>
      //       ))}
      //     </List> */}
      //   </Grid.Column>
      // </Grid>
  );
};
