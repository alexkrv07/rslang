import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import * as profileActions from './actions';

const initialState = {
  user: null,
  isRedirect: false
};

const reducer = createReducer(initialState, builder => {
  builder
    .addMatcher(
      isAnyOf(
        profileActions.login.fulfilled,
        profileActions.logout.fulfilled,
        profileActions.register.fulfilled,
        // profileActions.loadCurrentUser.fulfilled
      ),
      (state, action) => {
        state.user = action.payload;
        state.isRedirect = true;
      }
    )
    .addMatcher(
      isAnyOf(
        profileActions.login.rejected,
        profileActions.logout.rejected,
        profileActions.register.rejected,
        // profileActions.loadCurrentUser.rejected
      ),
      state => {
        state.user = null;
      }
    );
});

export { reducer };
