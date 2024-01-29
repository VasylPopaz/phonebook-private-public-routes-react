import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, refreshCurrentUser, signUp } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(signUp.fulfilled, logIn.fulfilled),
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(isAnyOf(signUp.rejected, logIn.rejected), (state, action) => {
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
