import PropTypes from 'prop-types';
import { IconName, IconSize, ButtonType, AppRoute } from '../../../common/enums/enums';
import { userType } from '../../../common/prop-types/prop-types';
import { Button, Icon, NavLink } from '../../common/common';

import styles from './styles.module.scss';

const Header = ({ user, onUserLogout }) => (
  <div className={styles.headerWrp}>
    <NavLink to={AppRoute.ROOT} className={`${styles.menuBtn} ${styles.logo}`}>
      RS Lang
    </NavLink>
    <nav className={styles.nav}>
      <ul className={styles.headerMenu}>
        <li className={styles.menuItem}>
          <NavLink to={AppRoute.BOOK}
            className={({ isActive }) => (isActive ? `${styles.menuBtn} ${styles.active}` : `${styles.menuBtn}`)}
          >
            <Icon name={IconName.BOOK_OPEN} size={IconSize.SM} className={styles.menuIcon}/>
            Book
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to={AppRoute.AUDIO_CALL} className={styles.menuBtn}>
            <Icon name={IconName.HEAD_PHONE} size={IconSize.SM} className={styles.menuIcon}/>
            Audio Call
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink to={AppRoute.SPRINT} className={styles.menuBtn}>
            <Icon name={IconName.SPRINT} size={IconSize.SM} className={styles.menuIcon}/>
            Sprint
          </NavLink>
        </li>
        {user && (
        <li className={styles.menuItem}>
            <NavLink to={AppRoute.STATISTICS} className={styles.menuBtn}>
              <Icon name={IconName.STATISTICS} size={IconSize.SM} className={styles.menuIcon}/>
              Statistics
            </NavLink>
          </li>
        )}
      </ul>
    </nav>

    {!user && (
      <div className={styles.auth}>
        <NavLink to={AppRoute.LOGIN} className={styles.menuBtn}>
          Login
        </NavLink>
      </div>
    )}

    {user && (
      <div className={styles.auth}>
        <NavLink to={AppRoute.PROFILE} className={styles.menuBtn}>
          <Icon name={IconName.USER_CIRCLE} size={IconSize.LARGE} />
        </NavLink>
        <Button
          className={`${styles.menuBtn} ${styles.logoutBtn}`}
          onClick={onUserLogout}
          type={ButtonType.BUTTON}
          iconName={IconName.LOG_OUT}
          iconSize={IconSize.LARGE}
          isBasic
        />
      </div>
    )}
  </div>
);

Header.propTypes = {
  onUserLogout: PropTypes.func.isRequired,
  user: userType.isRequired
};

export default Header;
