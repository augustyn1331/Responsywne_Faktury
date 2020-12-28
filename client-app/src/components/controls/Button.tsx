import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "13px",
    margin: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(0.4),
      marginTop: "4px !important",
    },
  },
}));

export const Button = (props: any) => {
  const { text, size, color, onClick, icon, ...other } = props;
  const classes = useStyles();
  return (
    <MuiButton
      variant={"outlined"}
      size={size || "medium"}
      color={color || "primary"}
      onClick={onClick}
      startIcon={icon}
      {...other}
      classes={{ root: classes.root }}
    >
      {text}
    </MuiButton>
  );
};
