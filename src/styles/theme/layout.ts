import { PaletteMode } from '@mui/material';
import { ILayoutStyles } from './themeTypes';
// import { StyleConstants } from '../StyleConstants';
import { ColorPalette } from './colors';

export const getLayoutStyles = (_mode: PaletteMode): ILayoutStyles => {
  return {
    // header: {
    //   height: StyleConstants.HEADER_HEIGHT,
    //   background: ColorPalette.main,
    //   contrastText: ColorPalette.contrast,
    //   borderColor: ColorPalette.component2,
    // },
    body: {
      background: ColorPalette.light,
    },
    // footer: {
    //   background: ColorPalette.main,
    // },
    button: {
      color: ColorPalette.light,
      background: ColorPalette.dark,
      disabled: ColorPalette.component1,
    },
    textbox: {
      background: ColorPalette.light,
      borderColor: ColorPalette.component1,
      input: ColorPalette.component2,
    },
    paper: {
      background: ColorPalette.light,
    },
    priorities: {
      high: {
        color: ColorPalette.priority.high.text,
        background: ColorPalette.priority.high.background,
      },
      medium: {
        color: ColorPalette.priority.medium.text,
        background: ColorPalette.priority.medium.background,
      },
      low: {
        color: ColorPalette.priority.low.text,
        background: ColorPalette.priority.low.background,
      },
    },
  };
};
