import React, { useRef, useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { playlistState, categoryState } from '../state/state';
import styled from 'styled-components';
import AppLayout from './appLayout';
import { useNavigate } from 'react-router-dom';

const AddPlayList = () => {
  const [category, setCategory] = useState();
  const [video, setVideo] = useState();

  const setPlaylist = useSetRecoilState(playlistState);
  const [tags, setTags] = useRecoilState(categoryState);

  const tagRef = useRef();
  const urlRef = useRef();
  const formRef = useRef();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setPlaylist((playlist) => [
      ...playlist,
      { category: category, url: urlRef.current.value },
    ]);

    formRef.current.reset();
    setVideo();
    navigate('/');
  };

  const onTagClick = (event) => {
    event.preventDefault();
    setCategory(event.target.innerText);
  };

  const onKeyPress = (event) => {
    event.preventDefault();
    if (event.key === 'Enter' && tags.length < 8) {
      setTags((tags) => [...tags, event.target.value]);
      tagRef.current.value = '';
    }
  };

  const updateThumbnails = (e) => {
    e.preventDefault();
    const videoId = e.target.value.split('=')[1];
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyC7JbbVZOzUzpkyJK8zPnMNfs2brBsrUg0&part=snippet&id=${videoId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items[0].snippet))
      .catch((error) => console.log('error', error));
  };

  return (
    <AppLayout>
      <Container>
        <PageName>Make Your Playlist</PageName>
        <Form ref={formRef}>
          <div>
            <Section>
              <div>
                <FormElement>
                  <Label>플레이리스트 Youtube URL</Label>
                  <Input
                    ref={urlRef}
                    onChange={updateThumbnails}
                    size='large'
                    type='url'
                  />
                  <PlaceHolder>
                    플레이리스트에 담고 싶은 유튜브 영상 URL을 입력해주세요
                  </PlaceHolder>
                </FormElement>
                <FormElement>
                  <Label>플레이리스트 Preview</Label>
                  {video ? (
                    <>
                      <Thumbnail src={video.thumbnails.high.url} />
                      <Title>{video.title}</Title>
                    </>
                  ) : (
                    <>
                      <NoVideo />
                      <NoTitle />
                    </>
                  )}
                </FormElement>
              </div>
              <div>
                <FormElement>
                  <Label>카테고리 Tag</Label>
                  <Category>
                    {tags.map((tag, index) => (
                      <Tag key={index} onClick={onTagClick}>
                        {tag}
                      </Tag>
                    ))}
                  </Category>
                  <PlaceHolder>
                    총 8개의 카테고리 tag를 생성하실 수 있습니다
                  </PlaceHolder>
                </FormElement>
                <FormElement>
                  <Label>원하는 카테고리가 없다면?</Label>
                  <Input ref={tagRef} type='text' onKeyPress={onKeyPress} />
                  <PlaceHolder>공백 포함 10자 입력할 수 있습니다</PlaceHolder>
                </FormElement>
              </div>
            </Section>
          </div>
          <Button type='submit' onClick={onSubmit}>
            플레이리스트에 담기
          </Button>
        </Form>
      </Container>
    </AppLayout>
  );
};

export default AddPlayList;

const Container = styled.main``;

const PageName = styled.div`
  margin-bottom: 1em;
  font-size: 2.5em;
  text-align: center;
  font-family: ${({ theme }) => theme.font.engFont};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const FormElement = styled.div`
  margin: 2em;
`;

const Section = styled.section`
  display: flex;
`;

const Label = styled.div`
  margin-bottom: 0.5em;
  font-size: 0.8em;
  font-weight: 600;
`;
const Input = styled.input`
  width: ${(props) => (props.size === 'large' ? '35em' : '15em')};
`;

const PlaceHolder = styled.div`
  margin-top: 0.5em;
  font-size: 0.7em;
  color: ${({ theme }) => theme.fontColor.lightGrey};
`;

const Button = styled.button`
  margin-right: 2.5em;
  ${({ theme }) => theme.common.button};
  color: ${({ theme }) => theme.themeColor.white};
  background-color: ${({ theme }) => theme.themeColor.green};
`;

const NoVideo = styled.div`
  width: 16em;
  height: 10em;
  background-color: ${({ theme }) => theme.themeColor.lightGreen};
  border-radius: 10px;
  margin-bottom: 0.5em;
`;

const Thumbnail = styled.img`
  width: 16em;
  height: 10em;
  border-radius: 10px;
  margin-bottom: 0.5em;
`;

const NoTitle = styled(NoVideo)`
  width: 12em;
  height: 1em;
`;

const Title = styled.div`
  width: 16rem;
  font-size: 0.7em;
`;

const Category = styled.section`
  width: 30em;
`;

const Tag = styled.button`
  ${({ theme }) => theme.common.button};
  margin: 0.3em 0.3em;
  background-color: ${({ theme }) => theme.themeColor.lightGreen};
  color: ${({ theme }) => theme.themeColor.white};
`;
