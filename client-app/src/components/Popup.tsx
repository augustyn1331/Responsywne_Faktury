import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    borderRadius: "24px 24px 0px 0px !important",
    backgroundColor: "#0b56a2",
  },
  title: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "rgb(244, 244, 244)",
  },
  iconButton: {
    color: "rgb(244, 244, 244)",
    paddingTop: "4px",
    paddingBottom: "4px",
  },
  icon: {
    fontSize: "1.6em !important",
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Popup(props: any) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <Dialog
      open={openPopup}
      maxWidth={"lg"}
      keepMounted
      TransitionComponent={Transition}
    >
      <Toolbar className={classes.appBar}>
       
        <Typography variant="h5" className={classes.title}>
          FAKTURA
        </Typography> <IconButton
          edge="end"
          onClick={handleClose}
          className={classes.iconButton}
        >
          <CloseRoundedIcon className={classes.icon} />
        </IconButton>
      </Toolbar>
      {children}
    </Dialog>
  );
}
