import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";
import { plPL } from '@material-ui/core/locale';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00b4ff",
    },
    secondary: {
      main: "#0b56a2",
    },
    success: {
      main: "#4caf50",
    },
    
  },
  typography: {
    fontFamily: ["Sora", "sans-serif"].join(","),
  },
  shape: {
    borderRadius: 10,
  },

  overrides: {
    MuiTypography: {
      h2: {
        fontWeight: 200,
      },
      h3: {
        fontSize: "1.8em"
      },
      overline: {
        fontWeight: 300,
      },
    },
    MuiDialog:{
      paper:{
        backgroundColor: "rgba(0, 0, 0, .0) !important",
        marginLeft:"6px",
        marginRight:"8px",
        boxShadow: "none",
      },
    },
    MuiDialogActions:{
      root:{
        backgroundColor: "white",
      },
    },
    MuiTableCell: {
      head:{
        paddingTop: "0.75em",
        paddingBottom:"0.75em",
      },
      root: {
        paddingTop: "1.175em",
        paddingBottom:"1.175em",
        "&:first-child": {
          paddingLeft: 8,
          textAlign: "left",
        },
        "&:last-child": {
          paddingRight: 8,
        },
        paddingRight: 3,
        paddingLeft: 3,
        fontWeight: 200,
      },
    },
    MuiButtonBase: {
      root: {
        height: "3.20em !important",
      },
    },
    MuiOutlinedInput: {
      root: {
        height: "3em",
      },
      adornedEnd: {
        padding: "2px !important",
      },
    },
    MuiInputBase: {
      root: {
        fontWeight: 300,
      },
    },
    MuiIconButton: {
      root: {
        paddingLeft: "6px",
        paddingRight:"6px",
        "&:hover": {
          backgroundColor: "$labelcolor",
        },
      },
    },
    MuiInputLabel: {
      // Name of the component ⚛️ / style sheet
      root: {
        fontSize: "1em",
        // Name of the rule
        "&$focused": {
          // increase the specificity for the pseudo class
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiTableSortLabel:{
      icon: {
        fontSize:"1em"
      },
    },
    MuiToolbar:{
      gutters:{
        paddingLeft:"12px !important"
      }
    },
    MuiTablePagination:{
      actions:{
        marginLeft:"10px",
      },
      selectRoot:{
        marginRight:"10px",
        marginLeft:0
      }
    },

    MuiButton: {
      startIcon: {
        marginRight:"4px"
      },
      outlined:{
        padding: "4px 10px"
      }
    },
  },
},plPL);

export default theme;
