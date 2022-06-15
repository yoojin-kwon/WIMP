import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Link to='/'>
        <Logo>What's In My Playlist</Logo>
      </Link>
      <Link to='/addPlaylist'>
        <AiOutlinePlus size={25} />
      </Link>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: sticky;
  width: 100vw;
  top: 0;
  height: 5em;
  padding: 1em 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.themeColor.white};
`;

const Logo = styled.span`
  font-family: ${({ theme }) => theme.font.logoFont};
  font-size: 1.4em;
`;
