import { useSelector } from '../../../../hooks/hooks';
import { BASE_URL } from '../../../../common/constants/constants';
import { Button, Image,  } from '../../../common/common';
import { ImageSize, ButtonType } from '../../../../common/enums/enums';
import styles from './styles.module.scss';

const WordCard = ({word}) => {
  const { user } = useSelector(state => ({
    user: state.profile.user
  }));

  const listAudio = [
    word.audio,
    word.audioMeaning,
    word.audioExample
  ];

  const hasUser = Boolean(user);
  const handlePlayAudio = () => {};
  const handleStopPlayAudio = () => {};
  const handleDifficultBtn = () => {};
  const handleLearnedBtn = () => {};

  return (
    <li className={styles.wordCard}>
      <div className={styles.wordCardImage}>
        <Image
          alt={word.word}
          isCentered
          src={`${BASE_URL}${word.image}`}
          size={ImageSize.MEDIUM}
          isCircular
        />
        </div>
      <div className={styles.wordCardContent}>
        <h4 className={styles.wordCardHeading}>
          {`${word.word} - ${word.transcription} - ${word.wordTranslate}`}
          <Button
              className={styles.wordCardPlayAudioBtn}
              onClick={handlePlayAudio}
              type={ButtonType.BUTTON}
              isBasic
          />
          <Button
            className={styles.wordCardStopPlayAudioBtn}
            onClick={handleStopPlayAudio}
            type={ButtonType.BUTTON}
            isBasic
          />
        </h4>
        <p className={styles.wordCardMeaning}>{`${word.textMeaning} - ${word.textMeaningTranslate}`}</p>
        <p className={styles.wordCardExample}>{`${word.textExample} - ${word.textExampleTranslate}`}</p>
        {hasUser && (
          <div className={styles.wordCardBtnWrp}>
            <Button
              className={styles.wordCardDifficultBtn}
              onClick={handleDifficultBtn}
              type={ButtonType.BUTTON}
              isBasic
            >
              Difficult
            </Button>
            <Button
              className={styles.wordCardLearnedtBtn}
              onClick={handleLearnedBtn}
              type={ButtonType.BUTTON}
              isBasic
            >
              Learned
            </Button>
          </div>
        )}

      </div>
    </li>
  )}

  export default WordCard;


  // {
    // "id": "string",
    // "group": 0,
    // "page": 0,
    // "word": "string",
    // "image": "string",
    // "audio": "string",
    // "audioMeaning": "string",
    // "audioExample": "string",
    // "textMeaning": "string",
    // "textExample": "string",
    // "transcription": "string",
    // "wordTranslate": "string",
    // "textMeaningTranslate": "string",
    // "textExampleTranslate": "string"
  // }
