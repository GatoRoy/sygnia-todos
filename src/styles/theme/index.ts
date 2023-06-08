import { PaletteMode/* , ThemeOptions */ } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { getPaletteStyles } from './palette';
import { getLayoutStyles } from './layout';

export const getAppTheme = (mode: PaletteMode): ThemeOptions => ({
  palette: getPaletteStyles(mode),

  layout: getLayoutStyles(mode),

  typography: {
    fontFamily: 'Montserrat, Poppins, sans-serif',
  },

  shape: {
    borderRadius: 2,
  },
});
