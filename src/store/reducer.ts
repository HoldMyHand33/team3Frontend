import {combineReducers} from 'redux';

import exampleSlice from '../slices/example';

const rootReducer = combineReducers({
  exam: exampleSlice.reducer,
  //... 다른 슬라이스는 여기다가 추가하면됨
  // user : userSlice.reducer
});

// state를 쓸 때 임포트 해서 사용함
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
