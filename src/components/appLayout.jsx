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
  min-height: 100%;
  position: relative;
`;

const Content = styled.div`
  padding-top: 1em;
  ${({ theme }) => theme.common.flexCenter}
`;
