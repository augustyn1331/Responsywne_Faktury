import React, { useEffect, useState } from "react";
import { IInvoice } from "../../app/models/invoice";
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core";
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import { InvoiceList } from "./InvoiceList";
import { PageFooter } from "../../components/PageFooter";
import { PageHeader } from "../../components/PageHeader";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: "100%",
      marginTop: "-28px",
      [theme.breakpoints.up("sm")]: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
      },
      [theme.breakpoints.up("lg")]: {
        paddingRight: theme.spacing(6),
        marginTop: "7em",
      },
      [theme.breakpoints.up("xl")]: {
        maxWidth: "95%",
        float: "right",
        paddingRight: theme.spacing(6),
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    grid: {
      float: "right",
    },
    mobilegrid: {
      paddingLeft:"0 !important",
      paddingRight:"2px !important",
      [theme.breakpoints.up("sm")]: {
        padding: "8px"
      },
    },
    largeIcon: {
      fontSize: "4em",
    },
  })
  
);



export const InvoiceDashboard = () => {
  
  const classes = useStyles();
  const [invoices, setInvoices] = useState<IInvoice[]>([]);
  useEffect(() => {
    axios
      .get<IInvoice[]>("http://localhost:5000/api/invoices")
      .then((response) => {
        let invoices: IInvoice[] = [];
        response.data.forEach(invoice => {
          invoice.date = invoice.date.split('T')[0]
          invoices.push(invoice);
        })

        setInvoices(response.data);
      });
  }, []);

  return (
    <Container className={classes.root}>
      <Grid className={classes.grid} container spacing={2}>
        <Grid className={classes.mobilegrid} item xs={12}>
          <PageHeader
            title="FAKTURY"
            icon={<LibraryBooksOutlinedIcon className={classes.largeIcon} />}
          />
        </Grid>
        <Grid item xs={12} className={classes.mobilegrid}>
          <InvoiceList invoices={invoices}/>
        </Grid>
        {/* <Grid item xs={12} className={classes.mobilegrid}>
          <InvoiceForm invoices={invoices}/>
        </Grid> */}
        <Grid className={classes.mobilegrid} item xs={12}>
          <PageFooter />
        </Grid>
      </Grid>
    </Container>
  );
};
