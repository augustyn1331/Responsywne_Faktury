import React from "react";
import { default as MuiButton } from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: " 0px 8px",
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
