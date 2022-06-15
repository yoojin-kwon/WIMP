import React from 'react';
import styled from 'styled-components';
import AppLayout from './appLayout';

const AddPlayList = () => {
  return (
    <AppLayout>
      <Container>
        <Title>Make Your Playlist</Title>
        <Form>
          <div>
            <Section>
              <div>
                <FormElement>
                  <Label>플레이리스트 Youtube URL</Label>
                  <Input size='large' />
                  <PlaceHolder>
                    플레이리스트에 담고 싶은 유튜브 영상 URL을 입력해주세요
                  </PlaceHolder>
                </FormElement>
                <FormElement>
                  <Label>플레이리스트 Preview</Label>
                  <NoVideo />
                  <NoTitle></NoTitle>
                </FormElement>
              </div>
              <div>
                <FormElement>
                  <Label>카테고리 Tag</Label>
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
                  <PlaceHolder>
                    총 8개의 카테고리 tag를 생성하실 수 있습니다
                  </PlaceHolder>
                </FormElement>
                <FormElement>
                  <Label>원하는 카테고리가 없다면?</Label>
                  <Input></Input>
                  <PlaceHolder>공백 포함 10자 입력할 수 있습니다</PlaceHolder>
                </FormElement>
              </div>
            </Section>
          </div>
          <Button>플레이리스트에 담기</Button>
        </Form>
      </Container>
    </AppLayout>
  );
};

export default AddPlayList;

const Container = styled.main``;

const Title = styled.div`
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

const NoTitle = styled(NoVideo)`
  width: 12em;
  height: 1em;
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
