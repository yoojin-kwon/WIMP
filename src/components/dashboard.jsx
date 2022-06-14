import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const Dashboard = () => {
  return <Text>Dashboard</Text>;
};

export default Dashboard;

const Text = styled.div`
  color: ${({ theme }) => theme.themeColor.orange};
`;
