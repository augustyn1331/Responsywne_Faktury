import React, { useEffect, useState } from "react";
import { IInvoice } from "../../app/models/invoice";
import { Grid, makeStyles, Paper } from "@material-ui/core";
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
  date: new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()),
  dueDate: new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate()),
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

  const validate = (fieldValues=values) => {
    let temp: any = {...errors};
    
    if('invoiceNumber' in fieldValues)
    temp.invoiceNumber = fieldValues.invoiceNumber ? "" : "To pole jest niezbędne.";

    if('seller' in fieldValues)
    temp.seller = fieldValues.seller ? "" : "Wprowadź swoje dane.";

    if('sellerAddress' in fieldValues)
    temp.sellerAddress = fieldValues.sellerAddress ? "" : "Wprowadź adres Kontrahenta.";

    if('sellerNIP' in fieldValues)
    temp.sellerNIP = fieldValues.sellerNIP.match(/^[0-9]+$/) != null ? "" : "Błędny numer NIP.";

    if('customer' in fieldValues)
    temp.customer = fieldValues.customer ? "" : "Wprowadź dane kontrahenta.";

    if('customerNIP' in fieldValues)
    temp.customerNIP = fieldValues.customerNIP.match(/^[0-9]+$/) != null ? "" : "Błędny numer NIP Kontrahenta.";

    if('customerAddress' in fieldValues)
    temp.customerAddress = fieldValues.customerAddress ? "" : "Wprowadź adres Kontrahenta.";

    if('currency' in fieldValues)
    temp.currency = fieldValues.currency.length != 0 ? "" : "Wybierz walutę."; //dodac regex

    if('paymentMethod' in fieldValues)
    temp.paymentMethod = fieldValues.paymentMethod ? "" : "Wprowadż metodę płatności.";

    if('paymentDate' in fieldValues)
    temp.paymentDate = fieldValues.paymentDate ? "" : "Wprowadż metodę płatności.";

    if('dueDate' in fieldValues)
    temp.dueDate = fieldValues.dueDate.getTime() >= values.date.getTime() ? "" : "Data zrealizowania nie może występować przed datą wystawienia"

    setErrors({
      ...temp,
    });

    if(fieldValues==values)
        return Object.values(temp).every((x) => x == "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);
  const classes = useStyles();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate()) window.alert("Pomyślnie wprowadzono dane");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Paper elevation={2}>
        <Grid container spacing={0} className={classes.top}>
          <Grid item xs={6} sm={5} lg={4}>
            <Controls.Input
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
                label="Sprzedający"
                name="seller"
                value={values.seller}
                onChange={handleInputChange}
                error={(errors as any).seller}
              />
            </Grid>
            <Grid item xs={5} sm={12}>
              <Controls.Input
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
                label="Kontrahent"
                name="customer"
                value={values.customer}
                onChange={handleInputChange}
                error={(errors as any).customer}
              />
            </Grid>
            <Grid item xs={5} sm={12}>
              <Controls.Input
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
                label="Metoda płatności"
                name="paymentMethod"
                value={values.paymentMethod}
                onChange={handleInputChange}
                error={(errors as any).paymentMethod}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.Input
                label="Termin płatności"
                name="paymentDate"
                value={values.paymentDate}
                onChange={handleInputChange}
                error={(errors as any).paymentDate}
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
                label="Netto"
                name="net"
                value={values.net}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4}>
              <Controls.Input
                label="Brutto"
                name="gross"
                value={values.gross}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Controls.Input
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
