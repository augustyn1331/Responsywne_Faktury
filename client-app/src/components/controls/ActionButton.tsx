import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: "0px 0px !important",
    padding: "0px 0px !important",
    height: "37px !important",
    width: "37px !important",
    [theme.breakpoints.up("md")]: {
      // margin: "0px 6px !important",
      height: "42px !important",
      width: "42px !important",
    },
  },
}));

export const ActionButton = (props: any) => {
  const { children, onClick, icon, ...other } = props;
  const classes = useStyles();

  return (
    <Button
      variant={"outlined"}
      classes={{ root: classes.root }}
      onClick={onClick}
      {...other}
    >
      {children}
    </Button>
  );
};
