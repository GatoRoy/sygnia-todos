import React, { FC } from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';
// import { BaseControlProps } from '../componentTypes';

interface CheckboxProps extends /* BaseControlProps,  */MuiCheckboxProps {}

export const Checkbox: FC<CheckboxProps> = props => {
  // const { children } = props;
  // return <MuiCheckbox {...props}>{children}</MuiCheckbox>;
  return <MuiCheckbox {...props} />;
};
