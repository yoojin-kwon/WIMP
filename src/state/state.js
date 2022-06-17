import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const formState = atom({
  key: 'formState',
  default: {
    url: '',
    category: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const tagState = atom({
  key: 'tagState',
  default: ['코딩할때', '월요일 아침에 듣는'],
  effects_UNSTABLE: [persistAtom],
});
