import { createMuiTheme } from "@material-ui/core/styles";

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
      root: {
        paddingTop: 16,
        paddingBottom: 16,
        "&:first-child": {
          paddingLeft: 12,
        },
        "&:last-child": {
          paddingRight: 12,
        },
        paddingRight: 3,
        paddingLeft: 3,
        fontWeight: 200,
      },
    },
    MuiTableHead: {
      root: {
        fontWeight: 500,
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
    MuiButton: {
      startIcon: {
        marginRight:"4px"
      },
      outlined:{
        padding: "4px 10px"
      }
    },
  },
});

export default theme;
