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
  Footer,
  // Notifications
} from './common/common';
import SignPage from './sign/sign';
import NotFoundPage from './not-found/not-found';
import AboutPage from './about/about';
import ProfilePage from './profile/profile';
import TextBookPage from './text-book/text-book';

import styles from './styles.module.scss';

const Routing = () => {
  const { user } = useSelector(state => ({
    user: state.profile.user
  }));
  const dispatch = useDispatch();
// const user = 'Alex';

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

    <>
      <header className={styles.header}>
        <Header user={user} onUserLogout={handleUserLogout} />
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.visuallyHidden}>
            RSLang
          </h1>
          <Routes>
            <Route path={AppRoute.LOGIN} element={<PublicRoute component={SignPage} />} />
            <Route path={AppRoute.REGISTRATION} element={<PublicRoute component={SignPage} />} />
            <Route path={AppRoute.ROOT} element={<PublicRoute component={AboutPage} />} />
            <Route path={AppRoute.PROFILE} element={<PrivateRoute component={ProfilePage} />} />
            <Route path={AppRoute.BOOK} element={<PublicRoute component={TextBookPage} />} />
            <Route path={AppRoute.ANY} element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer/>
      </footer>
      {/* <Notifications onPostApply={handlePostApply} user={user} /> */}

    </>
  );
};

export default Routing;
