import {createMuiTheme,} from "@material-ui/core/styles";

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00b4ff",
      },
      secondary: {
        main: "#fdfdff",
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
          fontWeight:300,
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
      
    },
  });

  export default theme;