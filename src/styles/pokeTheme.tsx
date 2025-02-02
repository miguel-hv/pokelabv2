import { createTheme } from "@mui/material";

const getCSSVariable = (variable: string) => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

  // If running in test environment (Vitest), return a default color when value is empty
  if (!value) {
    return {
      "--action-main": "hsl(52, 77%, 63%)",
      "--action-secondary": "hsl(25, 93%, 10%)",
      "--shadow-unactive-clear": "hsl(0deg 0% 17.47%)",
      "--shadow-unactive-dark": "hsl(0deg 0% 0.15%)",
      "--shadow-active-clear": "hsl(48, 92%, 62%)",
      "--shadow-active-dark": "hsl(0deg 0.53% 6.41%)"
    }[variable] || "#000"; // Default to black
  }

  return value;
};

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