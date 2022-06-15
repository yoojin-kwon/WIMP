import React from 'react';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';

const AppLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default AppLayout;

const Container = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  ${({ theme }) => theme.common.flexCenter}
`;
