import React, { FC } from 'react';
import { Typography as MuiTypography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { BaseControlProps } from '../componentTypes';

interface TypographyProps extends BaseControlProps {
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom?: boolean;
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap?: boolean;
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph?: boolean;
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant?: Variant | 'inherit';
}

export const Typography: FC<TypographyProps> = props => {
  const { children } = props;
  return <MuiTypography {...props}>{children}</MuiTypography>;
};
