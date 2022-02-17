import { configureStore } from '@reduxjs/toolkit';

import * as services from '../services/services';
import { profileReducer, textBookReducer } from './root-reducer';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    textbook: textBookReducer
  },
  middleware: getDefaultMiddleware => (getDefaultMiddleware({
    thunk: {
      extraArgument: { services }
    }
  }))
});

export default store;
