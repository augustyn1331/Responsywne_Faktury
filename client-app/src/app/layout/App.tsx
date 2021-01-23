import React from "react";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import "./styles.css";
import theme from "./theme";
import {
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core/styles";
import InvoiceDashboard from "../../pages/invoices/InvoiceDashboard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>({
    "@global": {
      html: {
        fontSize: "0.875rem",
        [theme.breakpoints.up("md")]: {
          fontSize: "1rem",
        },
      },
    },
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
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
