import { IconName, IconSize } from '../../../common/enums/enums';
import { GITHUB_OWNER_URL, RS_SCHOOL_URL } from '../../../common/constants/constants';
import { Icon, Image } from '../../common/common';
import RSSLogo from './rs_school_js.svg';
import styles from './styles.module.scss';

const Footer = () => (
  <div className={styles.footerWrp}>
    <div className={styles.footerCopyright}>
      &#169; 2022 RS Lang
    </div>
    <a href={GITHUB_OWNER_URL} className={styles.menuBtn} target="_blank"  rel="noreferrer">
      <Icon name={IconName.GITHUB} size={IconSize.LARGE} className={styles.menuIcon}/>
      Oleksii Korovushkin
    </a>
    <a href={RS_SCHOOL_URL} className={styles.menuBtn} target="_blank"  rel="noreferrer">
      <Image
        width="75"
        height="30"
        src={RSSLogo}
        alt="rs school"
        className={styles.menuImageBtn}
      />
    </a>
  </div>
);

export default Footer;
