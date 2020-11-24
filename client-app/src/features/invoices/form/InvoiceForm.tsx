import React, { useEffect, useState } from "react";
import { IInvoice } from "../../../app/models/invoice";
import { Grid } from "@material-ui/core";

interface IProps {
  setEditMode: (editMode: boolean) => void;
  invoice: IInvoice;
  createInvoice: (invoice: IInvoice) => void;
  editInvoice: (invoice: IInvoice) => void;
}

const initialValues = {
  id: "",
  invoiceNumber: "",
  seller: "",
  sellerNIP: "",
  sellerAddress: "",
  accountNumber: "",
  customer: "",
  customerNIP: "",
  customerAddress: "",
  date: new Date(),
  dueDate: new Date(),
  net: 0,
  gross: 0,
  currency: "",
  comments: "",
  paymentMethod: "",
  paymentDate: "",
  symbol: "",
  gtu: "",
};

export const InvoiceForm = () => {
  // const [invoices, setInvoices] = useState<IInvoice[]>([]);

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}></Grid>
        {/* <Grid item xs={6} sm={3}></Grid>
        <Grid item xs={6} sm={3}></Grid>
        <Grid item xs={6} sm={3}></Grid>
        <Grid item xs={6} sm={3}></Grid> */}
      </Grid>
    </form>
  );
};
