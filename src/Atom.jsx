import { atom } from 'recoil';

// 현재 선택된 건물 상태
export const currentBuildingState = atom({
  key: 'currentBuildingState',
  default: '',
});

// 현재 아이콘이 위치한 층 상태
export const currentFloorState = atom({
  key: 'currentFloorState',
  default: 1, // 기본값: 1층
});
