import React from "react";
import {Typography, makeStyles, Theme, Container } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "rgb(244, 244, 244)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 'calc(2% + 50px)',
    bottom: '0',
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(1),
      fontSize: 11,
    },
      fontSize: 12,

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },

}));

export const PageFooter = () => {
  const classes = useStyles();
  return (
        <Container className={classes.root}>
        <img src={`/assets/logo.png`} alt="Miłego dnia :)"/>
          <Typography className={classes.pageTitle} variant="overline" component="div">
            Kontakt: augustyn1331@gmail.com
          </Typography>
        </Container>
  );
};
