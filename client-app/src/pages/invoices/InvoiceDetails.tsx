import React from "react";
import { IInvoice } from "../../app/models/invoice";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Form} from "../../components/useForm";
import { Controls } from "../../components/controls/Controls";

const useStyles = makeStyles((theme) => ({
  top: {
    paddingTop: "5px",
    marginBottom:"10px",
    [theme.breakpoints.up("sm")]: {
      marginTop:"20px",
       marginBottom:"40px"
    },    
  },
  myPaper:{
    borderRadius: "0px 0px 24px 24px",
    paddingBottom:"10px",
    paddingTop: "6px",
  },
  empty: {
    height: "2em",
  },
  reverse: {
    flexDirection: "row-reverse",
  },
}));

interface IProps {
    invoice: IInvoice;
    setSelectedInvoice: (invoice: IInvoice | null) => void;
}


export const InvoiceDetails: React.FC<IProps> = ({
    invoice, setSelectedInvoice
}) => {
  const classes = useStyles();

  return (
    <Form>
  <Paper elevation={2} className={classes.myPaper}>
        <Grid
          container
          spacing={0}
          className={classes.top}
          justify="space-between"
        >
          <Grid item xs={6} sm={4}>
            <Controls.Input
              name="invoiceNumber"
              disabled
              label="Numer faktury"
              value={invoice.invoiceNumber}
            />
          </Grid>
          <Grid container item xs={12} sm={6} justify="space-between">
            <Grid item xs={6} sm={6} md={5} >
              <Controls.Input
                name="date"
                label="Data wystawienia"
                value={invoice.date.toString().split("T")[0]}
                disabled
                
              />
            </Grid>
            <Grid item xs={6} sm={6} md={5}>
              {invoice.dueDate &&
                <Controls.Input
                name="dueDate"
                label="Data sprzedaży"
                value={invoice.dueDate.toString().split("T")[0]}
                disabled
              />}
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <Grid item xs={7} sm={12}>
              <Controls.Input
                label="Sprzedający"
                disabled
                name="seller"
                value={invoice.seller}
              />
            </Grid>
            <Grid item xs={5} sm={12}>
              <Controls.Input
                label="NIP Sprzedającego"
                disabled
                name="sellerNIP"
                value={invoice.sellerNIP}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                label="Adres sprzedającego"
                name="sellerAddress"
                disabled
                value={invoice.sellerAddress}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={6}>
            <Grid item xs={7} sm={12}>
              <Controls.Input
                label="Kontrahent"
                name="customer"
                disabled
                value={invoice.customer}
              />
            </Grid>
            <Grid item xs={5} sm={12}>
              <Controls.Input
                label="NIP Kontrahenta"
                name="customerNIP"
                disabled
                value={invoice.customerNIP}
              />
            </Grid>
            <Grid item xs={12}>
              <Controls.Input
                label="Adres kontrahenta"
                name="customerAddress"
                disabled
                value={invoice.customerAddress}
              />
            </Grid>
          </Grid>
          <Grid item sm={12}>
            <div className={classes.empty} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controls.Input
              label="Numer konta"
              name="accountNumber"
              disabled
              value={invoice.accountNumber}
            />
          </Grid>
          <Grid container item xs={8} md={4}>
            <Grid item xs={6}>
              <Controls.Input
                label="Netto"
                name="net"
                value={invoice.net}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.Input
                label="Brutto"
                name="gross"
                value={invoice.gross}
                disabled
              />
            </Grid>
          </Grid>
          <Grid item xs={4} md={2}>
            <Controls.Input
              label="Waluta"
              name="currency"
              value={invoice.currency}
              disabled
            />
          </Grid>

          <Grid container item xs={12} className={classes.reverse}>
            <Grid item xs={6} md={3}>
              <Controls.Input
                label="Metoda płatności"
                name="paymentMethod"
                value={invoice.paymentMethod}
                disabled
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Controls.Input
                label="Termin płatności"
                name="paymentDate"
                disabled
                value={invoice.paymentDate}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controls.Input
                label="Uwagi"
                name="comments"
                value={invoice.comments}
                disabled
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>


    </Form>
    
  );
};
