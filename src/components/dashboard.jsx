import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import AppLayout from './appLayout';

const Dashboard = () => {
  return (
    <AppLayout>
      <Text>Dashboard</Text>
    </AppLayout>
  );
};

export default Dashboard;

const Text = styled.div`
  color: ${({ theme }) => theme.themeColor.orange};
`;
