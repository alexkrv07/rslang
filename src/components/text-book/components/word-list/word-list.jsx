import { WordCard } from '../components';

import styles from './styles.module.scss';

const WordList = ({
  wordList,
  currentPlayWordId,
  difficultWordList,
  learnedWordList,
  typeShowWordList
}) => {


  const wordItems = wordList.map((word) => {
    const isDifficultWord = difficultWordList.includes(word.id);

    const isLearnedWord = learnedWordList.includes(word.id);

    return (
      <WordCard
        key={ word.id }
        word={ word }
        currentPlayWordId={ currentPlayWordId }
        isDifficultWord={ isDifficultWord }
        isLearnedWord={ isLearnedWord }
        typeShowWordList={typeShowWordList}
      />
    )
  });

  return <ul className={styles.wordList}>{ wordItems }</ul>
}

export default WordList;
