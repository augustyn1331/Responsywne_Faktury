import React from "react";
import {
  Dialog,
  makeStyles,
  Typography,
  Slide,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { TransitionProps } from "@material-ui/core/transitions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    borderRadius: "24px 24px 0px 0px !important",
    backgroundColor: "#0b56a2",
  },
  title: {
    marginLeft: theme.spacing(1.5),
    flex: 1,
    color: "rgb(244, 244, 244)",
  },
   iconButton: {
    color: "rgb(244, 244, 244)",
    paddingTop: "4px",
    paddingBottom: "4px",
  },
  icon:{
    fontSize: "1.6em !important"
  }
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
    <Dialog open={openPopup} keepMounted TransitionComponent={Transition}>
        <Toolbar className={classes.appBar}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            className={classes.iconButton}
          >
            <CloseRoundedIcon className={classes.icon}/>
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            FAKTURA
          </Typography>
        </Toolbar>
      {children}
    </Dialog>
  );
}
