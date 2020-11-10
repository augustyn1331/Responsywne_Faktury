import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { IInvoice } from "../models/invoice";
import { NavBar } from "../../features/nav/NavBar";
import { InvoiceDashboard } from "../../features/invoices/dashboard/InvoiceDashboard";
import { makeStyles, createStyles, Theme, createMuiTheme,ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { PageHeader } from "../../features/PageHeader";
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import './styles.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Sora',
      'sans-serif'
    ].join(','),
  },
  shape:{
    borderRadius:12
  }
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "6em",
      maxWidth: "80%",
      [theme.breakpoints.down('sm')]: {
        maxWidth: "100%",
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    grid:{
      float: "right",
    },
    largeIcon: {
      fontSize: "4em"
    },
  })
);

const App = () => {
  const [invoices, setInvoices] = useState<IInvoice[]>([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get<IInvoice[]>("http://localhost:5000/api/invoices")
      .then((response) => {
        setInvoices(response.data);
      });
  }, []);

  return (
    // <Fragment>
    //   <NavBar></NavBar>
    //   <Grid></Grid>
    //   <InvoiceDashboard invoices={invoices} />
    // </Fragment>
    <ThemeProvider theme={theme}>
    <Container className={classes.root} >
      <Grid className={classes.grid} container spacing={2} >
        <Grid className={classes.paper} item xs={12}>
          <PageHeader title="FAKTURY" 
          icon={<ListAltRoundedIcon className={classes.largeIcon} />} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </Container>
    </ThemeProvider>
  );
};

export default App;
