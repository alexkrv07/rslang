import { Route, Routes } from 'react-router-dom';
import { useCallback, useEffect, useDispatch, useSelector } from '../hooks/hooks';
import { StorageKey, AppRoute } from '../common/enums/enums';
import { storage } from '../services/services';
import { profileActionCreator } from '../store/actions';
import {
  Spinner,
  Header,
  PrivateRoute,
  PublicRoute,
  // Notifications
} from './common/common';
import SignPage from './sign/sign';
import NotFoundPage from './not-found/not-found';
import ProfilePage from './profile/profile';

const Routing = () => {
  const { user } = useSelector(state => ({
    user: state.profile.user
  }));
  const dispatch = useDispatch();

  const hasToken = Boolean(storage.getItem(StorageKey.TOKEN));
  const hasUser = Boolean(user);

  // const handlePostApply = useCallback(id => (
  //   dispatch(threadActionCreator.applyPost(id))
  // ), [dispatch]);

  const handleUserLogout = useCallback(() => (
    dispatch(profileActionCreator.logout())
  ), [dispatch]);

  useEffect(() => {
    if (hasToken) {
      dispatch(profileActionCreator.loadCurrentUser());
    }
  }, [hasToken, dispatch]);

  // if (!hasUser && hasToken) {
  //   return <Spinner isOverflow />;
  // }

  return (
    <div className="fill">
      {/* {hasUser && (
        <header>
          <Header user={user} onUserLogout={handleUserLogout} />
        </header>
      )} */}
      <main className="fill">
        <Routes>
          <Route path={AppRoute.LOGIN} element={<PublicRoute component={SignPage} />} />
          <Route path={AppRoute.REGISTRATION} element={<PublicRoute component={SignPage} />} />
          {/* <Route path={AppRoute.ROOT} element={<PrivateRoute component={ThreadPage} />} /> */}
          <Route path={AppRoute.PROFILE} element={<PrivateRoute component={ProfilePage} />} />
          {/* <Route path={AppRoute.SHARE_$POSTHASH} element={<PrivateRoute component={SharedPostPage} />} /> */}
          <Route path={AppRoute.ANY} element={<NotFoundPage />} />
        </Routes>
      </main>
      {/* <Notifications onPostApply={handlePostApply} user={user} /> */}
    </div>
  );
};

export default Routing;
