import { useCallback, useDispatch, useLocation, useSelector } from '../../hooks/hooks';
import styles from './styles.module.scss';


const Statistics = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const {  
    difficultWordList,
    learnedWordList
  } = useSelector(state => ({
    difficultWordList: state.textbook.difficultWordList,
    learnedWordList: state.textbook.learnedWordList,
  }));

  const totalLearnedWord = learnedWordList.length;




  return (

    <section className={styles.statisticsPage}>
      <h2 className={styles.statisticsTitle}>
        Statistics
      </h2>
      <div className={styles.totalStatistics}> 
        <h3 className={styles.statisticsSubtitle}>Total:</h3>
        <p className={styles.totalStatistics}>{`New words: ${totalLearnedWord}`}</p>
        <p className={styles.totalStatistics}>{`Learned words: ${totalLearnedWord}`}</p>
        <p className={styles.totalStatistics}>{`Percentage of correct answers per day: 0%`}</p>
      </div>
      <div className={styles.statisticsGameWrp}>
        <div className={styles.statisticsGameItem}>
          <h4 className={styles.statisticsSubtitle}>Audio Call:</h4>
          <p className={styles.totalStatistics}>{`New words: 0`}</p>
          <p className={styles.totalStatistics}>{`Percentage of correct answers per day: 0%`}</p>
          <p className={styles.totalStatistics}>{`Longest series of correct answers: 0`}</p> 
        </div>
        <div className={styles.statisticsGameItem}>
          <h4 className={styles.statisticsSubtitle}>Sprint:</h4>
          <p className={styles.totalStatistics}>{`New words: 0`}</p>
          <p className={styles.totalStatistics}>{`Percentage of correct answers per day: 0%`}</p> 
          <p className={styles.totalStatistics}>{`Longest series of correct answers: 0`}</p>

        </div>

      </div>
    </section>
  );
};

export default Statistics;