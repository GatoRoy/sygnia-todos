import React, { FC } from 'react';
import { Typography } from '../../components/controls/Typography';
import { StyledPageRow } from './styled';

interface PageHeaderProps {
  headline: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ headline }) => {
  return (
    <StyledPageRow>
      <Typography variant="h3">{headline}</Typography>
    </StyledPageRow>
  );
};
