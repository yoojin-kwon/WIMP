import React, { useContext } from 'react';
import styled from 'styled-components';
import AppLayout from './appLayout';
import thumbnail_default from '../assets/thumbnail.png';

const Dashboard = () => {
  const onErrorImg = (e) => {
    e.target.src = thumbnail_default;
  };

  return (
    <AppLayout>
      <Container>
        <Category>
          <Tag>코딩할때</Tag>
          <Tag>운동할때</Tag>
          <Tag>드라이브할때</Tag>
          <Tag>유진's best</Tag>
          <Tag>아침에 듣기 좋은</Tag>
          <Tag>밤에 듣기 좋은</Tag>
        </Category>
        <PlayList>
          <Thumbnail src='' alt='Image not found' onError={onErrorImg} />
          <Title>title</Title>
        </PlayList>
        <PlayList>
          <Thumbnail src='' alt='Image not found' onError={onErrorImg} />
          <Title>title</Title>
        </PlayList>
        <PlayList>
          <Thumbnail src='' alt='Image not found' onError={onErrorImg} />
          <Title>title</Title>
        </PlayList>
      </Container>
      <Container display='left'>
        <NoVideo />
        <NoTitle></NoTitle>
        <NoChannel></NoChannel>
        <NoDes></NoDes>
      </Container>
    </AppLayout>
  );
};

export default Dashboard;

const Container = styled.main`
  flex-direction: column;
  display: flex;
  align-items: ${(props) =>
    props.display === 'left' ? 'flex-start' : 'center'};
  margin: ${(props) => props.display === 'left' && '-10em 10em 0 0'};
`;

const Category = styled.section`
  width: 65%;
  flex-flow: column wrap;
  text-align: center;
`;

const Tag = styled.button`
  ${({ theme }) => theme.common.button};
  margin: 0.3em 0.3em;
  background-color: ${({ theme }) => theme.themeColor.green};
  color: ${({ theme }) => theme.themeColor.white};
`;

const PlayList = styled.section`
  margin: 1em 0;
  flex-direction: column;
  ${({ theme }) => theme.common.flexCenter};
`;

const Thumbnail = styled.img`
  width: ${(props) => (props.size === 'large' ? '40em' : '16em')};
`;

const Title = styled.span`
  font-size: 0.9em;
  font-weight: 600;
  margin-top: 1em;
`;

const NoVideo = styled.div`
  width: 35em;
  height: 25em;
  background-color: ${({ theme }) => theme.themeColor.lightGreen};
  border-radius: 10px;
  margin-bottom: 1em;
`;

const MetaData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const NoTitle = styled(NoVideo)`
  width: 20em;
  height: 2em;
`;

const NoChannel = styled(NoTitle)`
  width: 10em;
`;

const NoDes = styled(NoVideo)`
  width: 25em;
  height: 5em;
`;
