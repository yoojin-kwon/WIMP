import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const playlistState = atom({
  key: 'playlistState',
  default: [
    {
      category: '코딩할때',
      url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ',
    },
    {
      category: '월요일 아침에 듣는',
      url: 'https://www.youtube.com/watch?v=F9Ex1ESEWN4',
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom({
  key: 'categoryState',
  default: ['코딩할때', '월요일 아침에 듣는'],
  effects_UNSTABLE: [persistAtom],
});
