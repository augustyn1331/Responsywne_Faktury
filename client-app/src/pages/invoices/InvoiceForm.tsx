import React, { useEffect, useState } from "react";
import { IInvoice } from "../../app/models/invoice";
import { Button, Grid, Hidden, IconButton, makeStyles, Paper } from "@material-ui/core";
import { useForm, Form } from "../../components/useForm";
import { Controls } from "../../components/controls/Controls";
import * as invoiceService from "../../services/invoiceService";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';

const useStyles = makeStyles((theme) => ({
  top: {
    paddingTop: "5px",
  },
}));

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
  net: "",
  gross: "",
  currency: "",
  comments: "",
  paymentMethod: "",
  paymentDate: "",
  symbol: "",
  gtu: "",
};
export const InvoiceForm: React.FC<IProps> = ({}) => {
  const validate = () => {
    let temp: any = {};
    temp.invoiceNumber = values.invoiceNumber ? "" : "To pole jest niezbędne.";
    temp.seller = values.seller ? "" : "Wprowadź swoje dane.";
    temp.sellerAddress = values.sellerAddress
      ? ""
      : "Wprowadź adres Kontrahenta.";
    temp.sellerNIP = values.sellerNIP.length > 9 ? "" : "Błędny numer NIP.";
    temp.customer = values.customer ? "" : "Wprowadź dane kontrahenta.";
    temp.customerNIP =
      values.customerNIP.length > 9 ? "" : "Błędny numer NIP Kontrahenta.";
    temp.customerAddress = values.customerAddress
      ? ""
      : "Wprowadź adres Kontrahenta.";
    temp.currency = values.currency.length != 0 ? "" : "Wybierz walutę."; //dodac regex
    temp.paymentMethod = values.paymentMethod
      ? ""
      : "Wprowadż metodę płatności.";
    temp.paymentDate = values.paymentDate ? "" : "Wprowadż metodę płatności.";
    // temp.dueDate = values.dueDate.getTime() > values.date.getTime() ? "" : "Data zrealizowania nie może występować przed datą wystawienia"

    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues);
  const classes = useStyles();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) window.alert("dupa");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Paper elevation={2}>
        <Grid container spacing={0} className={classes.top}>
          <Grid item xs={6} sm={5} lg={4}>
            <Controls.Input
              variant="outlined"
              name="invoiceNumber"
              label="Numer faktury"
              value={values.invoiceNumber}
              onChange={handleInputChange}
              error={(errors as any).invoiceNumber}
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
                error={(errors as any).seller}
              />
            </Grid>
            <Grid item xs={5} sm={12}>
              <Controls.Input
                variant="outlined"
                label="NIP Sprzedającego"
                name="sellerNIP"
                value={values.sellerNIP}
                onChange={handleInputChange}
                error={(errors as any).sellerNIP}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                label="Adres sprzedającego"
                name="sellerAddress"
                value={values.sellerAddress}
                onChange={handleInputChange}
                error={(errors as any).sellerAddress}
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
                error={(errors as any).customer}
              />
            </Grid>
            <Grid item xs={5} sm={12}>
              <Controls.Input
                variant="outlined"
                label="NIP Kontrahenta"
                name="customerNIP"
                value={values.customerNIP}
                onChange={handleInputChange}
                error={(errors as any).customerNIP}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                label="Adres kontrahenta"
                name="customerAddress"
                value={values.customerAddress}
                onChange={handleInputChange}
                error={(errors as any).customerAddress}
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
                error={(errors as any).dueDate}
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
                error={(errors as any).currency}
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
              color="secondary"
              type="submit"
              text="DODAJ"
              icon={<AddOutlinedIcon/>}
            />
            <Controls.Button
              color="primary"
              text="RESETUJ"
              onClick={resetForm}
              icon={<RotateLeftOutlinedIcon/>}
            />
          </Grid>
        </Grid>
      </Paper>
    </Form>
  );
};
