import React from "react";
import {
  Paper,
  Card,
  Typography,
  makeStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#fdfdff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: theme.spacing(1),
  },
  pageIcon: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.85em",
    },
    color: "#00b4ff",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(1),
    },

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

export const PageHeader = (props: { title: any; icon: any }) => {
  const classes = useStyles();
  const { title, icon } = props;
  return (
    <Paper elevation={2} className={classes.root}>
      <Card className={classes.pageIcon}>{icon}</Card>
      <Typography className={classes.pageTitle} variant="h2" component="div">
        {title}
      </Typography>
    </Paper>
  );
};
