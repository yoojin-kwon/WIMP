import React from 'react';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';

const AppLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default AppLayout;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
