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
          <Tag>아침에 듣기 좋은</Tag>
          <Tag>밤에 듣기 좋은</Tag>
        </Category>
        <PlayListGroup>
          <PlayList_Row>
            <PlayList>
              <NoVideo size='small' />
              <NoTitle size='small' />
            </PlayList>
            <PlayList>
              <NoVideo size='small' />
              <NoTitle size='small' />
            </PlayList>
          </PlayList_Row>
          <PlayList_Row>
            <PlayList>
              <NoVideo size='small' />
              <NoTitle size='small' />
            </PlayList>
            <PlayList>
              <NoVideo size='small' />
              <NoTitle size='small' />
            </PlayList>
          </PlayList_Row>
          <PlayList_Row>
            <PlayList>
              <NoVideo size='small' />
              <NoTitle size='small' />
            </PlayList>
            <PlayList>
              <NoVideo size='small' />
              <NoTitle size='small' />
            </PlayList>
          </PlayList_Row>
        </PlayListGroup>
      </Container>
      <Container>
        <NoVideo />
        <NoTitle />
        <NoChannel />
        <NoDes />
      </Container>
    </AppLayout>
  );
};

export default Dashboard;

const Container = styled.main`
  margin-right: 3em;
`;

const Category = styled.section`
  width: 32em;
  flex-flow: column wrap;
  text-align: center;
`;

const Tag = styled.button`
  ${({ theme }) => theme.common.button};
  margin: 0.3em 0.3em;
  background-color: ${({ theme }) => theme.themeColor.lightGreen};
  color: ${({ theme }) => theme.themeColor.white};
`;

const PlayList_Row = styled.div`
  display: flex;
`;

const PlayListGroup = styled.div`
  overflow-y: scroll !important;
  height: 27em;
`;

const PlayList = styled.section`
  margin: 1em;
`;

const NoVideo = styled.div`
  width: ${(props) => (props.size === 'small' ? '15em' : '32em')};
  height: ${(props) => (props.size === 'small' ? '9em' : '22em')};
  background-color: ${({ theme }) => theme.themeColor.lightGreen};
  border-radius: 10px;
  margin-bottom: ${(props) => (props.size === 'small' ? '0.3em' : '0.5em')};
`;

const NoTitle = styled(NoVideo)`
  width: ${(props) => (props.size === 'small' ? '7em' : '20em')};
  height: ${(props) => (props.size === 'small' ? '1em' : '2em')};
`;

const NoChannel = styled(NoTitle)`
  width: 10em;
`;

const NoDes = styled(NoVideo)`
  width: 25em;
  height: 5em;
`;
