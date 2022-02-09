import { configureStore } from '@reduxjs/toolkit';

import * as services from '../services/services';
import { profileReducer } from './root-reducer';

const store = configureStore({
  reducer: {
    profile: profileReducer
  },
  middleware: getDefaultMiddleware => (getDefaultMiddleware({
    thunk: {
      extraArgument: { services }
    }
  }))
});

export default store;
