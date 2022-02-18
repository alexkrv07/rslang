import { useCallback, useDispatch, useLocation, useSelector } from '../../hooks/hooks';
import {  Navigate } from "react-router";
import { AppRoute } from '../../common/enums/enums';
import { profileActionCreator } from '../../store/actions';
import { LoginForm, RegistrationForm } from './components/components';
import styles from './styles.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { user } = useSelector(state => ({
    user: state.profile.user
  }));

  const hasUser = Boolean(user);

  const handleLogin = useCallback(
    loginPayload => dispatch(profileActionCreator.login(loginPayload)),
    [dispatch]
  );

  const handleRegister = useCallback(
    registerPayload => dispatch(profileActionCreator.register(registerPayload)),
    [dispatch]
  );

  const getScreen = path => {
    switch (path) {
      case AppRoute.LOGIN: {
        return <LoginForm onLogin={handleLogin} />;
      }
      case AppRoute.REGISTRATION: {
        return <RegistrationForm onRegister={handleRegister} />;
      }
      default: {
        return null;
      }
    }
  };

  if (hasUser) {
    return < Navigate to='/' />
  }


  return (
    <div className={styles.login}>
      <section className={styles.form}>
        {/* <h2 className={styles.logoWrapper}>
          <Image
            alt="Thread logo"
            width="75"
            height="75"
            isCircular
            src="http://s1.iconbird.com/ico/2013/8/428/w256h2561377930292cattied.png"
          />
          Thread
        </h2> */}
        {getScreen(pathname)}
      </section>
    </div>
  );
};

export default Login;
