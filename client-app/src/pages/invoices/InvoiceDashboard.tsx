import React, { useEffect, useState } from "react";
import { IInvoice } from "../../app/models/invoice";
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import { InvoiceForm } from "./InvoiceForm";
import { InvoiceList } from "./InvoiceList";
import { PageFooter } from "../../components/PageFooter";
import { PageHeader } from "../../components/PageHeader";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "7em",
      maxWidth: "100%",
      [theme.breakpoints.down("md")]: {
        marginTop: "-4em",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "-4.8em",
      },
      [theme.breakpoints.up("sm")]: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
      },
      [theme.breakpoints.up("lg")]: {

        paddingRight: theme.spacing(6),
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
        setInvoices(response.data);
      });
  }, []);

  return (
    <Container className={classes.root}>
      <Grid className={classes.grid} container spacing={2}>
        <Grid className={classes.paper} item xs={12}>
          <PageHeader
            title="FAKTURY"
            icon={<ListAltRoundedIcon className={classes.largeIcon} />}
          />
        </Grid>
        <Grid item xs={12}>
          <InvoiceList invoices={invoices}/>
        </Grid>
        <Grid item xs={12}>
          <InvoiceForm invoices={invoices}/>
        </Grid>

        <Grid className={classes.paper} item xs={12}>
          <PageFooter />
        </Grid>
      </Grid>
    </Container>
  );
};
