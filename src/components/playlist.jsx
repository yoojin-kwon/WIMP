import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Playlist = ({ url, viewDetail }) => {
  const [metaData, setMetaData] = useState();

  const fetchData = (url) => {
    const videoId = url.split('=')[1];
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyC7JbbVZOzUzpkyJK8zPnMNfs2brBsrUg0&part=snippet&id=${videoId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setMetaData(result.items[0].snippet))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <Container onClick={viewDetail}>
      <Video src={metaData?.thumbnails.high.url} />
      <Title>{metaData?.title}</Title>
    </Container>
  );
};

export default Playlist;

const Container = styled.section`
  margin: 1em;
  display: inline-block;
  width: 15em;
`;

const Video = styled.img`
  width: 15rem;
  height: 9em;
  border-radius: 10px;
  margin-bottom: 0.3em;
`;

const Title = styled.div`
  width: 15rem;
  height: 1em;
  overflow-x: clip;
  font-size: 0.7em;
`;
