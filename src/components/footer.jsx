import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Logo>What's In My Playlist</Logo>
      <Content>Contact dbwlskwon@gmail.com</Content>
      <Content>Copyright ⓒ WIMP. All rights reserved</Content>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  position: fixed;
  width: 100vw;
  bottom: 0;
  height: 10em;
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  background-color: ${({ theme }) => theme.themeColor.orange};
`;

const Logo = styled.span`
  font-family: ${({ theme }) => theme.font.logoFont};
  font-size: 1em;
  margin-bottom: 1em;
`;

const Content = styled.span`
  font-family: ${({ theme }) => theme.font.engFont};
  font-size: 0.8em;
  font-weight: 600;
  color: ${({ theme }) => theme.fontColor.darkGrey};
  padding: 0.2em 0;
`;
