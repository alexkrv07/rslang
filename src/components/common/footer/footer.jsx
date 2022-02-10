import { IconName, IconSize } from '../../../common/enums/enums';
import { GITHUB_OWNER_URL, RS_SCHOOL_URL } from '../../../common/constants/constants';
import { Icon, Image, NavLink } from '../../common/common';
import RSSLogo from './rs_school_js.svg';
import styles from './styles.module.scss';

const Footer = () => (
  <div className={styles.footerWrp}>
    <div className="footerCopyright">
      &#169;2022 RSLang
    </div>
    <a href={GITHUB_OWNER_URL} className={styles.menuBtn} target="_blank">
      <Icon name={IconName.GITHUB} size={IconSize.LARGE} />
      Oleksii Korovushkin
    </a>
    <a href={RS_SCHOOL_URL} className={styles.menuBtn} target="_blank">
      <Image
        width="103"
        height="41"
        src={RSSLogo}
        alt="rs school"
      />
    </a>
  </div>
);

export default Footer;
