import React, { FC, useState } from 'react';
import { ToggleButton as MuiToggleButton, ToggleButtonGroup as MuiToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

interface IToggleButtonOption {
  value: string;
  display: any;
  label?: string;
}

interface ToggleButtonProps {
  options: {
    [key: string]: IToggleButtonOption
  },
  onOptionToggled: (selectedOptionValue: string | null) => void;
  label?: string;
  defaultValue?: string;
  initialValue?: string;
}

export const ToggleButton: FC<ToggleButtonProps> = ({ options, onOptionToggled, label, defaultValue, initialValue }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(initialValue || defaultValue || null);

  const onToggle = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null,
  ) => {
    const selectedValue = defaultValue && !newValue ? defaultValue : newValue;
    setSelectedOption(selectedValue);
    onOptionToggled(selectedValue);
  };

  const buttonOptions = [];
  for (const key in options) {
    if (Object.prototype.hasOwnProperty.call(options, key)) {
      const currentOption = options[key];
      const optionComponent = (
        <StyledToggleButtonOption value={currentOption.value} aria-label={currentOption.label}>
          {currentOption.display}
        </StyledToggleButtonOption>
      );
      buttonOptions.push(optionComponent);
    }
  }

  return (
    <MuiToggleButtonGroup
      value={selectedOption}
      exclusive
      onChange={onToggle}
      aria-label={label}
    >
      {buttonOptions}
    </MuiToggleButtonGroup>
  );
};

const StyledToggleButtonOption = styled(MuiToggleButton)`
  background-color: ${({ theme }) => theme.layout.toggle.unselected.background};
  color: ${({ theme }) => theme.layout.toggle.unselected.color};

  &.Mui-selected {
    background-color: ${({ theme }) => theme.layout.toggle.selected.background};
    color: ${({ theme }) => theme.layout.toggle.selected.color};
  }
`;

