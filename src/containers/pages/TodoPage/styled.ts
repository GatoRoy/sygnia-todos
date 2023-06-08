import { styled } from '@mui/material/styles';
import { StyledPageRow } from '../styled';

export const StyledTodoPageHeaderWrapper = styled(StyledPageRow)`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  position: relative;
`;

export const StyledTodoListWrapper = styled(StyledPageRow)`
  overflow-x: hidden;
  overflow-y: auto;
`;
