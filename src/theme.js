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
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          transition: theme.transitions.create(['background-color','color','transform'], { duration: theme.transitions.duration.short }),
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          boxShadow: theme.shadows[1],
          backgroundColor: theme.palette.background.paper,
          transition: theme.transitions.create(['transform','box-shadow'], { duration: theme.transitions.duration.short }),
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: theme.shadows[4],
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          transition: theme.transitions.create(['background-color','transform'], { duration: theme.transitions.duration.short }),
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            transform: 'scale(1.1)',
          },
        }),
      },
    },
  },
});

export default theme;