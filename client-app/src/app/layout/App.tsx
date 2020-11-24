import React, { useState, useEffect} from "react";
import axios from "axios";
import { IInvoice } from "../models/invoice";
import ResponsiveDrawer from "../../features/nav/ResponsiveDrawer";
import "./styles.css";
import theme from "./theme";
import {
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { InvoiceDashboard } from "../../features/invoices/dashboard/InvoiceDashboard";
import { Grid } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      float: "right",
    },
    "@global": {
      // MUI typography elements use REMs, so you can scale the global
      // font size by setting the font-size on the <html> element.
      html: {
        [theme.breakpoints.down("xs")]: {
          fontSize: 12,
        },
        fontSize: 13,
        [theme.breakpoints.up("sm")]: {
          fontSize: 14,
        },
      },
    },
  })
);

const App = () => {
  const [invoices, setInvoices] = useState<IInvoice[]>([]);
  useStyles();
  const classes = useStyles();
  useEffect(() => {
    axios
      .get<IInvoice[]>("http://localhost:5000/api/invoices")
      .then((response) => {
        setInvoices(response.data);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
       <Grid className={classes.grid} container spacing={2}>
        <Grid item xs={2} lg={2} xl={1}>
        <ResponsiveDrawer/>
        </Grid>
        <Grid item xs={12} lg={10} xl={11} >
        <InvoiceDashboard invoices={invoices}></InvoiceDashboard>
        </Grid>
        </Grid>
        
    </ThemeProvider>
  );
};

export default App;
