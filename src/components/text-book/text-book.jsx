import { useCallback, useDispatch, useSelector } from '../../hooks/hooks';
import { textbookActionCreator } from '../../store/actions';
import { GROUP_ARRAY, PAGE_ARRAY } from '../../common/constants/constants';
import { GroupItem, PageItem, WordList } from './components/components';

import styles from './styles.module.scss';

const TextBook = () => {
  const dispatch = useDispatch();
  const { user, wordList, currentGroup, currentPage } = useSelector(state => ({
    user: state.profile.user
  }));
  const hasUser = Boolean(user);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const onChangePage = useCallback(
    pageNumber => dispatch(textbookActionCreator.changePage(pageNumber)),
    [dispatch]
  );

  const onChangeGroup = useCallback(
    groupNumber => dispatch(textbookActionCreator.changePage(groupNumber)),
    [dispatch]
  );

  const onGroupDifficult = useCallback(
    () => dispatch(textbookActionCreator.getPageDifficult()),
    [dispatch]
  );

  const pageItems = PAGE_ARRAY.map((pageNumber, index) => {
    return <PageItem pageNumber={pageNumber} currentPage={currentPage} onChangePage={onChangePage}/>
  });

  const pageItems = PAGE_ARRAY.map((pageNumber, index) => {
    return <PageItem pageNumber={pageNumber} currentPage={currentPage} onChangePage={onChangePage}/>
  });



  return (
    <>
      <div className={styles.navWrp}>
        <nav className={styles.navGroup}>
          <ul  className={styles.navGroupList}>
            {groupItems}
            { hasUser && (
              <li className={styles.menuItem}>
                <Button
                  className={`${styles.menuBtn} ${styles.navGroupBtn}`}
                  onClick={onGroupDifficult}
                  type={ButtonType.BUTTON}
                  // iconName={IconName.LOG_OUT}
                  // iconSize={IconSize.LARGE}
                  isBasic               
                >
                  Difficult words
                </Button>
              </li>
            )}
          </ul>
        </nav>
        <nav className={styles.navGame}>
          <ul className={styles.navPageList}>
            <li className={styles.menuItem}>
              <NavLink to={AppRoute.AUDIO_CALL} className={styles.menuBtn}>
                <Icon name={IconName.HEAD_PHONE} size={IconSize.LARGE} />
                Audio Call
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink to={AppRoute.SPRINT} className={styles.menuBtn}>
                <Icon name={IconName.SPRINT} size={IconSize.LARGE} />
                Sprint
              </NavLink>
           </li>
          </ul>
        </nav>
      </div>

      <nav className={styles.navPage}>
        <ul className={styles.navPageList}>
           {pageItems}
        </ul>
      </nav>
      <WordList wordList={wordList}/>

    </>
  );
};

export default TextBook;