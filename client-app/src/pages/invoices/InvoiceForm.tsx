import React, { useEffect, useState } from "react";
import { IInvoice } from "../../app/models/invoice";
import { Grid, Hidden, IconButton, makeStyles, Paper } from "@material-ui/core";
import { useForm, Form } from "../../components/useForm";
import { Controls } from "../../components/controls/Controls";
import * as invoiceService from "../../services/invoiceService";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

interface IProps {
  invoices: IInvoice[];
}

const initialFValues = {
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

const useStyles = makeStyles((theme) => ({
  top: {
    paddingTop: "5px",
  },
}));

export const InvoiceForm: React.FC<IProps> = ({}) => {
  const { values, setValues, handleInputChange } = useForm(initialFValues);
  const classes = useStyles();
  return (
    <Form>
      <Paper elevation={2}>
        <Grid container spacing={0} className={classes.top}>
          <Grid item xs={6} sm={5} lg={4}>
            <Controls.Input
              variant="outlined"
              name="invoiceNumber"
              label="Numer faktury"
              value={values.invoiceNumber}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid container item xs={12} sm={6}>
            <Grid item xs={7} sm={12}>
              <Controls.Input
                variant="outlined"
                label="Sprzedający"
                name="seller"
                value={values.seller}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={5} sm={12}>
              <Controls.Input
                variant="outlined"
                label="NIP Sprzedającego"
                name="sellerNIP"
                value={values.sellerNIP}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                label="Adres sprzedającego"
                name="sellerAddress"
                value={values.sellerAddress}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Grid container item xs={12} sm={6}>
            <Grid item xs={7} sm={12}>
              <Controls.Input
                variant="outlined"
                label="Kontrahent"
                name="customer"
                value={values.customer}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={5} sm={12}>
              <Controls.Input
                variant="outlined"
                label="NIP Kontrahenta"
                name="customerNIP"
                value={values.customerNIP}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                label="Adres kontrahenta"
                name="customerAddress"
                value={values.customerAddress}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={6}>
              <Controls.DatePicker
                name="date"
                label="Data wystawienia faktury"
                value={values.date}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.DatePicker
                name="dueDate"
                label="Data zrealizowania faktury"
                value={values.dueDate}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={6}>
              <Controls.Input
                variant="outlined"
                label="Metoda płatności"
                name="paymentMethod"
                value={values.paymentMethod}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.Input
                variant="outlined"
                label="Termin płatności"
                name="paymentDate"
                value={values.paymentDate}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Grid container item xs={12}>
          <Grid item xs={4}>
              <Controls.Select
                label="Waluta"
                name="currency"
                value={values.currency}
                onChange={handleInputChange}
                options={invoiceService.getCurrency}
              />
            </Grid>
            <Grid item xs={4}>
              <Controls.Input
                variant="outlined"
                label="Netto"
                name="net"
                value={values.net}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Controls.Input
                variant="outlined"
                label="Brutto"
                name="gross"
                value={values.gross}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
          <Controls.Input
                variant="outlined"
                label="Uwagi"
                name="comments"
                value={values.comments}
                onChange={handleInputChange}
              />
            </Grid>

          <Grid item xs={12}>
            <Controls.Button
              style={{
                backgroundColor: "#00b4ff",
              }}
              type="submit"
              text="ZATWIERDŹ"
            />
            <IconButton aria-label="reset">
              <RotateLeftIcon
                style={{
                  color: "#00b4ff",
                  fontSize: "1.7em",
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Form>
  );
};
