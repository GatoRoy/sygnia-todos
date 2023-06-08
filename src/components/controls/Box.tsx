import React, { FC } from 'react';
import { Box as MuiBox } from '@mui/material';
import { BaseControlProps } from '../componentTypes';

interface BoxProps extends BaseControlProps {}

export const Box: FC<BoxProps> = props => {
  const { children } = props;
  return <MuiBox {...props}>{children}</MuiBox>;
};
