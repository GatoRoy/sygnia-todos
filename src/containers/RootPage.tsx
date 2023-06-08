import React, { FC } from 'react';
import MainLayout from './MainLayout';

export interface RootPageProps {}

export const RootPage: FC<RootPageProps> = () => {
  return <MainLayout />;
};
