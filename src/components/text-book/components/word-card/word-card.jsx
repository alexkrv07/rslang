import { useCallback, useDispatch, useSelector } from '../../../../hooks/hooks';
import { textbookActionCreator } from '../../../../store/actions';
import { BASE_URL } from '../../../../common/constants/constants';
import { Button, Image,  } from '../../../common/common';
import {  ButtonType, IconName, IconSize, StatusWordList } from '../../../../common/enums/enums';
import styles from './styles.module.scss';

const WordCard = ({
  word,
  currentPlayWordId,
  isDifficultWord,
  isLearnedWord,
  typeShowWordList
 }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({
    user: state.profile.user,
    // typeShowWordList: state.textbook.typeShowWordList
  }));
  const wordId = word.id;

  let userId;
  if (user)  {
    userId= user.userId;
  }

  const isLearnedWordList = typeShowWordList === StatusWordList.LEARNED_WORD_LIST;
  const isDifficultList = typeShowWordList === StatusWordList.DIFFICULT_WORD_LIST;

  const isPlay = word.id === currentPlayWordId;

  const listAudio = [
    word.audio,
    word.audioMeaning,
    word.audioExample
  ];

  const wordPlayList = {
    currentWordId: word.id,
    wordPlayList: listAudio
  }

  const hasUser = Boolean(user);

  const handlePlayAudio = useCallback(() => (
    dispatch(textbookActionCreator.setPlayList(wordPlayList))
  ), [dispatch]);

  const handleStopPlayAudio = useCallback(
    () => dispatch(textbookActionCreator.stopPlayList()),
    [dispatch]
  );
  const handleDifficultBtn = () => dispatch(textbookActionCreator.addDificultWord({wordId, userId}));


  const handleLearnedBtn = () => dispatch(textbookActionCreator.addLearnedWord({wordId, userId}));

  const handleNotDifficultBtn = useCallback(
    () => dispatch(textbookActionCreator.deleteDificultWord({wordId, userId})),
    [dispatch]
  );

  return (
    <li className={styles.wordCard}>
      <div className={styles.wordCardImageWrp}>
        <Image
          alt={word.word}
          isCentered
          src={`${BASE_URL}${word.image}`}
          className={styles.wordCardImage}
        />
        </div>
      <div className={styles.wordCardContent}>
        <h4 className={styles.wordCardHeading}>
          {`${word.word} - ${word.transcription} - ${word.wordTranslate}`}

          { !isPlay && (
            <Button
              className={styles.wordCardPlayAudioBtn}
              onClick={handlePlayAudio}
              type={ButtonType.BUTTON}
              iconName={IconName.PLAY}
              iconSize={IconSize.SM}
              isBasic
          />
          )}

          { isPlay && (
            <Button
              className={styles.wordCardStopPlayAudioBtn}
              onClick={handleStopPlayAudio}
              type={ButtonType.BUTTON}
              iconName={IconName.STOP}
              iconSize={IconSize.SM}
              isBasic
            />
          )}

        </h4>
        <p
          className={styles.wordCardMeaning}
          dangerouslySetInnerHTML={{__html: `${word.textMeaning} - ${word.textMeaningTranslate}`}}
        />
        <p
          className={styles.wordCardExample}
          dangerouslySetInnerHTML={{__html: `${word.textExample} - ${word.textExampleTranslatee}`}}
        />

        {(hasUser && !isLearnedWordList) && (
          <div className={styles.wordCardBtnWrp}>
            { !isDifficultList && (
              <Button

                className={isDifficultWord ? `${styles.wordCardDifficultBtn} ${styles.active}` : `${styles.wordCardDifficultBtn}`}
                onClick={handleDifficultBtn}
                type={ButtonType.BUTTON}
                isBasic
                isDisabled={isDifficultWord}
              >
                Difficult
              </Button>
            )}
            { isDifficultList && (
              <Button
                className={styles.wordCardDifficultBtn}
                onClick={handleNotDifficultBtn}
                type={ButtonType.BUTTON}
                isBasic
              >
                Not difficult
              </Button>
            )}

            <Button
              className={isLearnedWord ? `${styles.wordCardLearnedtBtn} ${styles.active}` : `${styles.wordCardLearnedtBtn}`}
              onClick={handleLearnedBtn}
              type={ButtonType.BUTTON}
              isBasic
              isDisabled={isLearnedWord}
            >
              Learned
            </Button>
            <span className={styles.wordCardanswers}>
              Right answers: 0
            </span>
            <span className={styles.wordCardanswers}>
              Wrong answers: 0
            </span>
          </div>
        )}

      </div>
    </li>
  )}

  export default WordCard;
