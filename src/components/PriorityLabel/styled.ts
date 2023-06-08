import { styled } from '@mui/material/styles';
import { Typography } from '../controls/Typography';

interface StyledPriorityLabelProps {
    priorityType: string;
}

export const StyledPriorityLabel = styled(Typography, {
    shouldForwardProp: prop => prop !== 'priorityType'
})<StyledPriorityLabelProps>`
    background-color: ${({ theme, priorityType }) => theme.layout.priorities[priorityType].background};
    color: ${({ theme, priorityType }) => theme.layout.priorities[priorityType].color};
`;
