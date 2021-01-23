import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
const useStyles = makeStyles((theme) => ({
    menubutton: {
      minWidth: 0,
      margin: "0px !important",
      padding: "0px !important",
      height: "44px !important",
      width: "38px !important",
      cursor: "pointer",
      fontSize: "50px !important",
    },
    moreicon: {
      fontSize: "28px !important",
      [theme.breakpoints.up("sm")]: {
        fontSize: "26px !important",
      },
    },
  }));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


export const CustomizedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton className={classes.menubutton} onClick={handleClick}>
        <MoreVertIcon className={classes.moreicon} />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableAutoFocusItem
      >
        <StyledMenuItem>
          <ListItemIcon>
            <VisibilityRoundedIcon/>
          </ListItemIcon>
          <ListItemText primary="POGLĄD" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <EditRoundedIcon/>
          </ListItemIcon>
          <ListItemText primary="EDYTUJ" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DeleteForeverRoundedIcon/>
          </ListItemIcon>
          <ListItemText primary="USUŃ" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}
