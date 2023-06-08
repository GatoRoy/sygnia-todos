import React, { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import { ClickableProps } from '../componentTypes';
import { PriorityValue } from '../../store/types';
import { getDisplayedPriority } from '../../store/utils';
import { StyledPriorityLabel } from './styled';

interface PriorityLabelProps extends ClickableProps {
    priority: PriorityValue;
}

export const PriorityLabel: FC<PriorityLabelProps> = props => {
    const { priority, onClick } = props;

    const displayedPriority = getDisplayedPriority(priority);

    return (
        <MuiButton onClick={onClick}>
            <StyledPriorityLabel priorityType={displayedPriority.type}>{displayedPriority.caption}</StyledPriorityLabel>
        </MuiButton>
    );
};
