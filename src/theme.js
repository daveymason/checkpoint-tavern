import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8a4f2b', 
    },
    secondary: {
      main: '#402218', 
    },
    background: {
      default: '#DBD2B8', 
    },
    text: {
      primary: '#4e342e', 
      secondary: '#fefefe', 
    },
  },
  typography: {
    fontFamily: '"Cinzel", serif',
    h1: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 700,
      color: '#402218',
    },
    h2: {
      fontFamily: '"Cinzel", serif',
      color: '#402218',
    },
    body1: {
      fontFamily: '"Roboto", Arial, sans-serif',
      color: '#4e342e',
    },
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
      },
    },
  },
});

export default theme;