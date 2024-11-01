'use client';
import { createTheme } from '@mui/material/styles';
import { Rubik } from 'next/font/google'; // Solo se importa Rubik

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF5733',
      light: '#FF8A65',
      dark: '#C73E20',
    },
    secondary: {
      main: '#808080',
      light: '#B3B3B3',
      dark: '#505050',
    },
    background: {
      default: '#181818',
      paper: '#282828',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
    },
  },
  typography: {
    fontFamily: rubik.style.fontFamily,
    h1: {
      fontFamily: '"New Amsterdam", sans-serif', // Se usa el nombre de la fuente entre comillas
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap');
      `,
    },
  },
});

export default theme;