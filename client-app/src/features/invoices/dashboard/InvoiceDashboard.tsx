import React from "react";
import { IInvoice } from "../../../app/models/invoice";
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import { PageHeader } from "../../PageHeader";
import { InvoiceForm } from "../form/InvoiceForm";
import { InvoiceList } from "./InvoiceList";
import { PageFooter } from "../../PageFooter";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "6.5em",
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

interface IProps {
  invoices: IInvoice[];
}

export const InvoiceDashboard: React.FC<IProps> = ({
  invoices 
}) => {
  const classes = useStyles();
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
          <InvoiceForm />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid className={classes.paper} item xs={12}>
          <PageFooter />
        </Grid>
      </Grid>
    </Container>
  );
};
