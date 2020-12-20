import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(0.4),
      marginTop: "2px !important"
    },
  },
  label: {
    color: "#fdfdff",
  },
}));

export const Button = (props: any) => {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "medium"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
};
