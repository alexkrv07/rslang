import { useCallback, useDispatch, useEffect, useSelector } from '../../hooks/hooks';
import { textbookActionCreator } from '../../store/actions';
import { GROUP_ARRAY, PAGE_ARRAY } from '../../common/constants/constants';
import { GroupItem, PageItem, WordList } from './components/components';
import { Button, Icon, NavLink, Spinner } from '../common/common';
import { playAudio, pauseAudio } from '../../helpers/helpers';
import { IconSize, ButtonType, IconName, AppRoute, StatusWordList } from '../../common/enums/enums';

import styles from './styles.module.scss';

const TextBookPage = () => {
  const dispatch = useDispatch();
  const {
    user,
    wordList,
    currentGroup,
    currentPage,
    isLoading,
    wordPlayList,
    difficultWordList,
    learnedWordList,
    typeShowWordList
  } = useSelector(state => ({
    user: state.profile.user,
    wordList: state.textbook.wordList,
    currentGroup: state.textbook.currentGroup,
    currentPage: state.textbook.currentPage,
    isLoading: state.textbook.isLoading,
    wordPlayList: state.textbook.wordPlayList,
    difficultWordList: state.textbook.difficultWordList,
    learnedWordList: state.textbook.learnedWordList,
    typeShowWordList: state.textbook.typeShowWordList,
  }));
  const hasUser = Boolean(user);
  const currentPlayWordId = wordPlayList.currentWordId;
  let userId;

   useEffect(() => {
    dispatch(textbookActionCreator.getWordList({currentPage, currentGroup}));

  }, [dispatch, currentGroup, currentPage]);

  useEffect(() => {
    dispatch(textbookActionCreator.getWordListDifficultWordList());

  }, [dispatch, difficultWordList ]);

  useEffect(() => {
    if (hasUser) {
      userId = user.userId;
      dispatch(textbookActionCreator.getWordListDifficult(userId));
    }
  }, [dispatch, user]);

  const isDifficultList = typeShowWordList === StatusWordList.DIFFICULT_WORD_LIST;

  const isPlay = Boolean(wordPlayList.currentWordId);

  if (isPlay) {
    playAudio(wordPlayList.wordPlayList);
  } else {
    pauseAudio();
  }

  const onChangePage = useCallback(
    pageNumber => dispatch(textbookActionCreator.setCurentPage(pageNumber)),
    [dispatch]
  );

  const onChangeGroup = useCallback(
    groupNumber => dispatch(textbookActionCreator.setCurentGroup(groupNumber)),
    [dispatch]
  );

  const onGroupDifficult = useCallback(
    () => dispatch(textbookActionCreator.getWordListDifficultWordList()),
    [dispatch]
  );

  const groupItems = GROUP_ARRAY.map((groupNumber, index) => {
    return (
      <GroupItem
        groupNumber={groupNumber}
        currentGroup={currentGroup}
        onChangeGroup={onChangeGroup}
        key={index}
      />
    )
  });

  const pageItems = PAGE_ARRAY.map((pageNumber, index) => {
    return <PageItem pageNumber={pageNumber} currentPage={currentPage} onChangePage={onChangePage} key={index}/>
  });

  return (
    <>
    <h2 className={styles.subTitle}>Textbook</h2>
      <div className={styles.navWrp}>
        <nav className={styles.navGroup}>
          <ul  className={styles.navGroupList}>
            {groupItems}
            { hasUser && (
              <li className={styles.menuItem}>
                <Button
                  className={isDifficultList ? `${styles.navGroupBtn} ${styles.active}` : `${styles.navGroupBtn}`}
                  onClick={onGroupDifficult}
                  type={ButtonType.BUTTON}
                  isBasic
                >
                  Difficult words
                </Button>
              </li>
            )}
          </ul>
        </nav>
        <nav className={styles.navGame}>
          <ul className={styles.navGameList}>
            <li className={styles.menuItem}>
              <NavLink to={`/${AppRoute.AUDIO_CALL}`} className={styles.menuLinkGame}>
                <Icon name={IconName.HEAD_PHONE} size={IconSize.LARGE} className={styles.menuLinkGameIcon}/>
                Audio Call
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink to={`/${AppRoute.SPRINT}`} className={styles.menuLinkGame}>
                <Icon name={IconName.SPRINT} size={IconSize.LARGE} className={styles.menuLinkGameIcon}/>
                Sprint
              </NavLink>
           </li>
          </ul>
        </nav>
      </div>

      <nav className={styles.navPage}>
        Pages
        <ul className={styles.navPageList}>
           {pageItems}
        </ul>
      </nav>
      <WordList
        wordList={wordList}
        currentPlayWordId={currentPlayWordId}
        difficultWordList={difficultWordList}
        learnedWordList={learnedWordList}
        typeShowWordList={typeShowWordList}
      />
      { isLoading && <Spinner isOverflow={true}/>}

    </>
  );
};

export default TextBookPage;
