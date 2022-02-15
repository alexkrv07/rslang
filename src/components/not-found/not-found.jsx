import { IconName, IconSize, AppRoute } from '../../common/enums/enums';
import { Icon, NavLink } from '../common/common';
import styles from './styles.module.scss';

const NotFoundPage = () => (
  <h2 className={styles.title}>
    <Icon size={IconSize.LARGE} name={IconName.FROWN} />
    <span className={styles.code}>404 Not Found</span>
    Go to
    <NavLink to={AppRoute.ROOT} className={styles.link}> Home </NavLink>
    page
  </h2>
);

export default NotFoundPage;
