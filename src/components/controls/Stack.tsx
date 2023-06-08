import React, { FC } from 'react';
import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';
import { BaseControlProps } from '../componentTypes';

interface StackProps extends BaseControlProps, MuiStackProps {}

export const Stack: FC<StackProps> = props => {
  const { children } = props;
  return <MuiStack {...props}>{children}</MuiStack>;
};
