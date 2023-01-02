import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import rootReducer from './reducer';

const store = configureStore({
  // 스토어에 리듀서 임포트 하기
  reducer: rootReducer,
});
export default store;

// 타입스크립트에서 dispatch를 사용하기 위해 useDispatch를 매핑함
// dispatch를 사용 할 떄는 임포트해서 useAppDispatch를 사용함
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
