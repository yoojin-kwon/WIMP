import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

const Header = () => {
  return (
    <Container>
      <Logo>What's In My Playlist</Logo>
      <AiOutlinePlus size={25} />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  height: 4em;
  padding: 0 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.themeColor.white};
`;

const Logo = styled.span`
  font-family: ${({ theme }) => theme.font.logoFont};
  font-size: 1.5em;
`;
