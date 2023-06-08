import React, { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ClickableProps } from '../../componentTypes';

interface ButtonProps extends ClickableProps {}

export const Button: FC<ButtonProps> = props => {
  const { children, onClick } = props;
  return (
    <StyledButton
      {...props}
      variant="contained"
      size="large"
      color="secondary"
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MuiButton)`
  text-transform: none;
`;
