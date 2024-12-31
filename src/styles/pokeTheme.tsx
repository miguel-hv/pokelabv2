import { createTheme } from "@mui/material";

const getCSSVariable = (variable: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  

export const pokeTheme = createTheme({
    palette: {
      primary: {
        main: getCSSVariable("--action-main"),
      },
      secondary: {
        main: getCSSVariable("--action-secondary"),
      },
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: 'none', 
            },
            outlinedPrimary: {
              borderColor: getCSSVariable("--action-main"),
              color: getCSSVariable("--action-secondary"),
              '&:hover': {
                backgroundColor: getCSSVariable("--action-main"),
                borderColor: getCSSVariable("--action-main"),
              },
            },
          },
        },
      },
  });