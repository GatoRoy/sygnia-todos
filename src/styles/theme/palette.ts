import { PaletteMode } from '@mui/material';
import { ColorPalette } from './colors';

export const getPaletteStyles = (_mode: PaletteMode) => {
  return {
    primary: {
      main: ColorPalette.light,
      light: ColorPalette.light,
      dark: ColorPalette.dark,
      contrastText: ColorPalette.dark,
    },
    secondary: {
      main: ColorPalette.dark,
      light: ColorPalette.light,
      dark: ColorPalette.component1,
      contrastText: ColorPalette.light,
    },
  };
};
