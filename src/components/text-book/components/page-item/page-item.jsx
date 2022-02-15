import { Button } from '../../../common/common';
import { IconName, IconSize, ButtonType, AppRoute } from '../../../../common/enums/enums';

import styles from './styles.module.scss';

const PageItem = ({ pageNumber, currentPage, onChangePage }) => {
  const isActivePage = pageNumber === currentPage;

  const handleChangePage = pageNumber => {
    onChangePage(pageNumber);
  };



  return (
    <li
      className={isActivePage ? `${styles.navPageItem} ${styles.active}` : styles.navPageItem}
    >
      <Button
        className={`${styles.menuBtn} ${styles.navPageBtn}`}
        onClick={handleChangePage}
        type={ButtonType.BUTTON}
        isDisabled={isActivePage}
        isBasic
      >
        {`Page ${+pageNumber + 1}`}
      </Button>
    </li>
  );
}

export default PageItem;
