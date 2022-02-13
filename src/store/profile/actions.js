import { createAsyncThunk } from '@reduxjs/toolkit';
import { HttpError } from '../../exceptions/exceptions';
import { HttpCode, StorageKey, ExceptionMessage } from '../../common/enums/enums';

import { ActionType } from './common';

const login = createAsyncThunk(
  ActionType.LOG_IN,
  async (request, { extra: { services } }) => {
    const { userId, name, token } = await services.auth.login(request);
    const email = request.email;
    services.storage.setItem(StorageKey.TOKEN, token);
    return { userId, name, token, email} ;
  }
);

const register = createAsyncThunk(
  ActionType.REGISTER,
  async (request, { extra: { services } }) => {
    const { id, name } = await services.auth.registration(request);

    // services.storage.setItem(StorageKey.TOKEN, token);

    return { id };
  }
);

const logout = createAsyncThunk(
  ActionType.LOG_OUT,
  (_request, { extra: { services } }) => {
    services.storage.removeItem(StorageKey.TOKEN);

    return null;
  }
);

const loadCurrentUser = createAsyncThunk(
  ActionType.LOG_IN,
  async (_request, { dispatch, rejectWithValue, extra: { services } }) => {
    try {
      return await services.auth.getCurrentUser();
    } catch (err) {
      const isHttpError = err instanceof HttpError;

      if (isHttpError && err.status === HttpCode.UNAUTHORIZED) {
        dispatch(logout());
      }

      return rejectWithValue(err?.message ?? ExceptionMessage.UNKNOWN_ERROR);
    }
  }
);

// export { login, register, logout };
export { login, register, logout, loadCurrentUser };
