import React, { FC } from 'react';
import { debounce, Input as MuiInput, styled } from '@mui/material';

interface TextboxProps {
  onChange: (textValue: string) => void;
  className?: string;
  placeholder?: string;
  value?: string;
}

export const Textbox: FC<TextboxProps> = props => {
  const { onChange, className, placeholder, value } = props;

  const handleChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = eventObject => {
    onChange(eventObject.target.value);
  };

  return (
    <StyledTextInput
      {...props}
      type="text"
      className={className}
      disableUnderline
      onChange={debounce(handleChange, 600)}
      placeholder={placeholder}
      value={value}
    />
  );
};

const StyledTextInput = styled(MuiInput)`
  padding: 0.2rem 0.5rem;
  background-color: ${({ theme }) => theme.layout.textbox.background};
  border: 3px solid ${({ theme }) => theme.layout.textbox.borderColor};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.layout.textbox.input};
`;
