import React, { useState, useEffect } from "react";
import axios from "axios";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import "./styles.css";
import theme from "./theme";
import {
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { InvoiceDashboard } from "../../pages/invoices/InvoiceDashboard";
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
          fontSize: 11.75,
        },
        fontSize: 13,
        [theme.breakpoints.up("sm")]: {
          fontSize: 14,
        },
      },
    },
    overrides:{
      MuiInputBase:{
        root:{
          [theme.breakpoints.down("xs")]: {
            fontSize: 12,
          },
          fontSize: 13,
          [theme.breakpoints.up("sm")]: {
            fontSize: 14,
          },
        }
      }
    }
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid className={classes.grid} container spacing={2}>
        <Grid item xs={2} xl={1}>
          <ResponsiveDrawer />
        </Grid>

        <Grid item xs={12} lg={10} xl={11}>
          <InvoiceDashboard></InvoiceDashboard>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
