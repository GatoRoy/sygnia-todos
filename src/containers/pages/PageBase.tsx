import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { PageHeader } from './PageHeader';
import { StyledPageBase, StyledPageBaseBody } from './styled';

export interface PageBaseProps extends PropsWithChildren<{}> {
  className?: string;
  headline?: string;
}

export const PageBase: FC<PageBaseProps> = ({
  children,
  className,
  headline,
}): ReactElement => {
  return (
    <StyledPageBase className={className}>
      <StyledPageBaseBody className="page-content">
        {headline && <PageHeader headline={headline} />}
        {children}
      </StyledPageBaseBody>
    </StyledPageBase>
  );
};
