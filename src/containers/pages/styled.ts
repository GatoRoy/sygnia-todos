import { styled } from '@mui/material/styles';
import { Box } from '../../components/controls/Box';

export const StyledPageBase = styled(Box)`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.layout.body.background};
  margin: 0;
`;

export const StyledPageBaseBody = styled(Box)`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  position: relative;
  width: 100%;
`;

export const StyledPageRow = styled(Box)`
  position: relative;
  width: 100%;
  height: auto;
  padding: 0.5rem 1rem;
`;
