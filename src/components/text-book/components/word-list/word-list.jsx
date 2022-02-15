import WordCard from '../components'

import styles from './styles.module.scss';

const WordList = ({wordList}) => {
  const wordItems = wordList.map((word, index) => {
    return <WordCard key={ word.id } word={ word } />
  });

  return <ul className={styles.wordList}>{ wordItems }</ul>
}

export default WordList;
