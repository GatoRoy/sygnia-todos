import React, { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import { BaseControlProps } from '../componentTypes';
import { PriorityValue } from '../../store/types';
import { getDisplayedPriority } from '../../store/utils';
import { StyledPriorityLabel } from './styled';

interface PriorityLabelProps extends BaseControlProps {
    priority: PriorityValue;
    onPriorityChanged?: (priority: PriorityValue) => void;
}

export const PriorityLabel: FC<PriorityLabelProps> = props => {
    const { priority, onPriorityChanged: onTaskPriorityChanged } = props;

    const displayedPriority = getDisplayedPriority(priority);

    const incrementTaskPriority = () => {
        return (priority < 3 ? priority + 1 : 1) as PriorityValue;
    };

    let onClicked = undefined;
    if (onTaskPriorityChanged) {
        onClicked = () => {
            const newPriority = incrementTaskPriority();
            onTaskPriorityChanged(newPriority);
        };
    }

    return (
        <MuiButton onClick={onClicked}>
            <StyledPriorityLabel priorityType={displayedPriority.type}>{displayedPriority.caption}</StyledPriorityLabel>
        </MuiButton>
    );
};
