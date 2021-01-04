import { createMuiTheme } from "@material-ui/core/styles";
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
      overline: {
        fontWeight: 300,
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
          paddingLeft: 12,
          textAlign: "left",
        },
        "&:last-child": {
          paddingRight: 12,
        },
        paddingRight: 3,
        paddingLeft: 3,
        fontWeight: 200,
      },
    },
    MuiButtonBase: {
      root: {
        fontWeight: 400,
        height: "3.25em !important",
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
        "&:hover": {
          backgroundColor: "$labelcolor",
        },
      },
    },
    MuiInputLabel: {
      // Name of the component ⚛️ / style sheet
      root: {
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
