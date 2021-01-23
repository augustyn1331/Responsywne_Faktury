import React from "react";
import { makeStyles,Theme } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#fdfdff",
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1),
  },
  pageIcon: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.85em",
    },
    color: theme.palette.primary.main,
  },
  pageTitle: {
      paddingLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4),
    },
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
