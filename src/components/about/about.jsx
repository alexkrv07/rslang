import styles from './styles.module.scss';
import {Image, Icon }from '../common/common';
import{DEFAULT_USER_AVATAR } from '../../common/constants/constants';
import { GITHUB_OWNER_URL } from '../../common/constants/constants';
import { IconName, IconSize, ButtonType, AppRoute } from '../../common/enums/enums';

const AboutPage = () => (
  <>
    <section className={styles.aboutApp}>
      <h2 className={styles.title}>
        Welcome to RS Lang
      </h2>
      <p>
        An application for the effective study of foreign words.<br/>
        Register to use all the features.
      </p>
      <h3 className={styles.subTitle}>Textbook</h3>
      <p>
        The collection contains 3600 commonly used English words that you need to organize your learning. The words in the collection are sorted from the simplest and most famous to the most difficult. The whole collection is divided into six sections, each section has 30 pages, each page has 20 words to study.
      </p>
      <h3 className={styles.subTitle}>Games</h3>
      <p>
        Learn while playing.
      </p>
      <ul className={styles.listGame}>
        <li className={styles.itemGame}>
          <h4 className={styles.itemGameTitle}>Audio Call</h4>
          <p className={styles.itemGameDescr}>
            "Audio Chall" is a workout that improves listening comprehension.
          </p>
        </li>
        <li className={styles.itemGame}>
          <h4 className={styles.itemGameTitle}>Sprint</h4>
          <p className={styles.itemGameDescr}>
            "Sprint" is a practice for repeating memorized words from your vocabulary.
          </p>
        </li>
      </ul>
    </section>
    <section className={styles.aboutTeam}>
      <h2 className={styles.title}>
        Our team
      </h2>
      <div>
        <div>
          <Image
            isCircular
            width="350"
            height="350"
            src={DEFAULT_USER_AVATAR}
            alt="author avatar"
          />
        </div>
        <div>
          <h4>
            Oleksii Korovushkin<br/>
            <span>
              Frontend developer
            </span>
          </h4>
          <a href={GITHUB_OWNER_URL} className={styles.menuBtn} target="_blank">
            <Icon name={IconName.GITHUB} size={IconSize.LARGE} />
              alexkrv07
          </a>
          <p>Did basic project settings, initial layout, redux setup, router setup, login form, part of the TextBook page, "Audio Challenge" game, "Savannah" game, backend</p>
        </div>
      </div>
    </section>
  </>

);

export default AboutPage;
