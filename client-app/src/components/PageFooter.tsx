import React from "react";
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 'calc(2% + 30px)',
    marginBottom: '30px',
  },
  textFooter: {
    paddingLeft: theme.spacing(1),
    fontSize: 11,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4),
      fontSize: 12,
    },
  },
}));

export const PageFooter = () => {
  const classes = useStyles();
  return (
        <Container className={classes.root}>
        <img src={`/assets/logo.png`} alt="Miłego dnia :)"/>
          <Typography className={classes.textFooter} variant="overline" component="div">
            Kontakt: augustyn1331@gmail.com
          </Typography>
        </Container>
  );
};
