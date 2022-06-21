import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import AppLayout from './appLayout';
import { useRecoilValue } from 'recoil';
import { categoryState, playlistState } from '../state/state';
import Playlist from './playlist';

const Dashboard = () => {
  console.log('hello');
  const tags = useRecoilValue(categoryState);
  const playlist = useRecoilValue(playlistState);
  const [list, setList] = useState();
  const [data, setData] = useState(null);
  const tagRef = useRef([]);

  const viewPlaylist = (e) => {
    e.preventDefault();
    const selectedCategory = e.target.innerText;
    const selectedPlaylist = playlist.filter(
      (el) => el.category === selectedCategory
    );
    let urlList = [];
    for (let i = 0; i < selectedPlaylist.length; i++) {
      urlList.push(selectedPlaylist[i].url);
    }
    setList(urlList);
  };

  const viewDetail = (e) => {
    e.preventDefault();
    const videoId = e.target.src.split('/')[4];
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyC7JbbVZOzUzpkyJK8zPnMNfs2brBsrUg0&part=snippet&id=${videoId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData([result.items[0].snippet, videoId]))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    tagRef.current.children[0].click();
  }, []);

  return (
    <AppLayout>
      <Container>
        <Category ref={tagRef}>
          {tags.map((tag, index) => (
            <Tag key={index} onClick={viewPlaylist}>
              {tag}
            </Tag>
          ))}
        </Category>
        <PlayListGroup>
          {list?.length > 0 ? (
            list.map((url) => (
              <Playlist key={url} url={url} viewDetail={viewDetail} />
            ))
          ) : (
            <NoPlayList>
              <NoVideo size='small' />
              <NoTitle size='small' />
            </NoPlayList>
          )}
        </PlayListGroup>
      </Container>
      <Container>
        {data ? (
          <>
            <Video
              type='text/html'
              title='youtube video player'
              src={`https://www.youtube.com/embed/${data[1]}`}
              frameBorder='0'
              allowFullScreen={false}
            />
            <Title>{data[0].title}</Title>
            <Channel>@{data[0].channelTitle}</Channel>
            <Des>{data[0].description}</Des>
          </>
        ) : (
          <>
            <NoVideo />
            <NoTitle />
            <NoChannel />
            <NoDes />
          </>
        )}
      </Container>
    </AppLayout>
  );
};

export default Dashboard;

const Container = styled.main`
  margin-right: 3em;
  height: 52em;
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
  width: 35em;
  height: 27em;
  flex-wrap: wrap;
`;

const NoPlayList = styled.section`
  margin: 1em;
`;

const Video = styled.iframe`
  width: 32em;
  height: 22em;
  border-radius: 10px;
  margin-bottom: 0.5em;
`;

const NoVideo = styled.div`
  width: ${(props) => (props.size === 'small' ? '15em' : '32em')};
  height: ${(props) => (props.size === 'small' ? '9em' : '22em')};
  background-color: ${({ theme }) => theme.themeColor.lightGreen};
  border-radius: 10px;
  margin-bottom: ${(props) => (props.size === 'small' ? '0.3em' : '0.5em')};
`;

const Title = styled.div`
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 1em;
  width: 32rem;
  overflow-y: hidden;
`;

const NoTitle = styled(NoVideo)`
  width: ${(props) => (props.size === 'small' ? '7em' : '20em')};
  height: ${(props) => (props.size === 'small' ? '1em' : '2em')};
`;

const Channel = styled.div`
  width: 32rem;
  overflow-y: hidden;
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 1em;
`;

const NoChannel = styled(NoTitle)`
  width: 10em;
`;

const Des = styled.div`
  width: 32rem;
  height: 5em;
  font-size: 0.7em;
  overflow-y: scroll;
`;

const NoDes = styled(NoVideo)`
  width: 25em;
  height: 3em;
`;
