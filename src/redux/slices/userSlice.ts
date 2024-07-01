import type { IUser } from '@/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = IUser & {
  isAuthorized: boolean;
};

const initialState: User = {
  name: null,
  surname: null,
  patronymic: null,
  gender: null,
  phonenumber: null,
  email: '',
  isAuthorized: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<User>) => ({ ...state, ...action.payload }),
    logout: state => ({ ...state, isAuthorized: false })
  }
});

export const { set: setUser, logout: logoutUser } = userSlice.actions;
export default userSlice;
