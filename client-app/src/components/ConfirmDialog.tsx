import React from "react";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
    backgroundColor: "white !important",
  },
  dialogTitle: {
    textAlign: "center",
    padding: "0px !important",
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "center",
  },
  icon: {
    fontSize: "5em !important",
  },
}));

export default function ConfirmDialog(props: any) {
  const { confirmDialog, children } = props;
  const classes = useStyles();

  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <LiveHelpOutlinedIcon color="primary" className={classes.icon} />
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="body1">{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>{children}</DialogActions>
    </Dialog>
  );
}
