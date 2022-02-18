import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpError } from '../../exceptions/exceptions';
import { HttpCode, StorageKey, ExceptionMessage } from '../../common/enums/enums';

import { ActionType } from './common';

const login = createAsyncThunk(
  ActionType.LOG_IN,
  async (request, { extra: { services } }) => {
    const { userId, name, token, refreshToken } = await services.auth.login(request);
    const email = request.email;
    const password = request.password;
    services.storage.setItem(StorageKey.TOKEN, token);
    services.storage.setItem(StorageKey.REFRESH_TOKEN, refreshToken);
    services.storage.setItem(StorageKey.EMAIL, email);
    services.storage.setItem(StorageKey.PASSWORD, password);
    return { userId, name, token, email, refreshToken} ;
  }
);

const register = createAsyncThunk(
  ActionType.REGISTER,
  async (request, { dispatch, extra: { services } }) => {
    const password = request.password;
    const { email} = await services.auth.registration(request);
    return dispatch(login({email, password}));
    // return { id, email };
  }
);

const logout = createAsyncThunk(
  ActionType.LOG_OUT,
  (_request, { extra: { services } }) => {
    services.storage.removeItem(StorageKey.TOKEN);
    services.storage.removeItem(StorageKey.REFRESH_TOKEN);
    services.storage.removeItem(StorageKey.EMAIL);
    services.storage.removeItem(StorageKey.TOKEN);
    services.storage.removeItem(StorageKey.PASSWORD);

    return null;
  }
);

const loadCurrentUser = createAsyncThunk(
  ActionType.LOAD_CURRENT_USER,
  async (_request, { dispatch, rejectWithValue, extra: { services } }) => {
    try {
      const email = services.storage.getItem(StorageKey.EMAIL);
      const password = services.storage.getItem(StorageKey.PASSWORD);
      return dispatch(login({email, password}));
    } catch (err) {
      const isHttpError = err instanceof HttpError;

      if (isHttpError && err.status === HttpCode.UNAUTHORIZED) {
        dispatch(logout());
      }

      return rejectWithValue(err?.message ?? ExceptionMessage.UNKNOWN_ERROR);
    }
  }
);

export { login, register, logout, loadCurrentUser };
