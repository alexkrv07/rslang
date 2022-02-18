import { IconName, IconSize, AppRoute } from '../../common/enums/enums';
import { Icon, NavLink } from '../common/common';
import styles from './styles.module.scss';

const AudioCallPage = () => (
  <h2 className={styles.title}>
    <Icon size={IconSize.LARGE} name={IconName.FROWN} />
    <span className={styles.code}>Soon there will be a AUDIO CALL game, but now you can go to</span>
    <NavLink to={AppRoute.ROOT} className={styles.link}> Home </NavLink>
    page
  </h2>
);

export default AudioCallPage;
