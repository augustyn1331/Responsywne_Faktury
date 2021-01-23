import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";
import { plPL } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: "#0b56a2",
      },
      secondary: {
        main: "#00b4ff",
      },
      success: {
        main: "#4caf50",
      },
    },
    typography: {
      fontFamily: ["Sora", "sans-serif"].join(","),
    },
    shape: {
      borderRadius: 7,
    },

    overrides: {
      MuiTooltip: {
        tooltip: {
          backgroundColor: "white",
          color: "rgba(0, 0, 0, 0.87)",
          boxShadow:
            "0px 4px 2px -3px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 2px 6px 1px rgba(0,0,0,0.12)",
          fontSize: "13.5px",
          fontWeight: 300,
        },
      },
      MuiTypography: {
        h2: {
          fontWeight: 200,
        },
        h3: {
          fontSize: "1.8em",
        },
        overline: {
          fontWeight: 300,
        },
        h6: {
          fontWeight: 300,
          fontSize: "1.4em",
        },
        body1: {
          fontWeight: 200,
        },
        body2: {
          fontWeight: 300,
        },
      },
      MuiListItemIcon: {
        root: {
          fontWeight: 200,
          minWidth: "37px",
        },
      },
      MuiDialog: {
        paper: {
          backgroundColor: "rgba(0, 0, 0, .0) !important",
          marginLeft: "6px",
          marginRight: "8px",
          boxShadow: "none",
        },
      },
      MuiDialogContent: {
        root: {
          padding: "0px",
        },
      },
      MuiDialogActions: {
        root: {
          backgroundColor: "white",
        },
      },
      MuiTableCell: {
        head: {
          paddingTop: "8px",
          paddingBottom: "1.5px",
        },
        root: {
          paddingTop: "16px",
          paddingBottom: "16px",
          "&:first-child": {
            paddingLeft: 8,
          },
          "&:last-child": {
            paddingRight: 4,
            paddingLeft: 0,
          },
          paddingRight: 3,
          paddingLeft: 3,
          fontWeight: 200,
        },
      },
      MuiButtonBase: {
        root: {
          height: "3em !important",
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
          "&$disabled": {
            color: "rgba(0, 0, 0, 0.62)",
          },
        },
      },
      MuiIconButton: {
        root: {
          paddingLeft: "6px",
          paddingRight: "6px",
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
      MuiCollapse: {
        wrapperInner: {
          padding: "0px 31px 12px 5px",
          display: "flex",
          justifyContent: "flex-end",
        },
      },
      MuiTableSortLabel: {
        icon: {
          fontSize: "1em",
        },
      },
      MuiToolbar: {
        gutters: {
          paddingLeft: "12px !important",
        },
      },
      MuiTablePagination: {
        actions: {
          marginLeft: "10px",
        },
        selectRoot: {
          marginRight: "10px",
          marginLeft: 0,
        },
      },

      MuiButton: {
        startIcon: {
          marginRight: "4px",
        },
        outlined: {
          padding: "4px 10px",
        },
        label: {
          fontWeight: 400,
        },
      },
    },
  },
  plPL
);

export default theme;
