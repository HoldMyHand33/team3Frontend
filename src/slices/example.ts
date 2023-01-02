import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '김제현',
  email: 'povt99@gmail.com',
};
const exampleSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    // 동기 작업
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
  },
  // 비동기 작업
  extraReducers: builder => {},
});

export default exampleSlice;
