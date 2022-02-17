import { Button } from '../../../common/common';
import { ButtonType } from '../../../../common/enums/enums';

import styles from './styles.module.scss';

const PageItem = ({ pageNumber, currentPage, onChangePage }) => {
  const isActivePage = pageNumber === currentPage;

  const handleChangePage = () => {
    onChangePage(pageNumber);
  };



  return (
    <li
      className={isActivePage ? `${styles.navPageItem} ${styles.active}` : `${styles.navPageItem}`}
    >
      <Button
        className={`${styles.menuBtn} ${styles.navPageBtn}`}
        onClick={handleChangePage}
        type={ButtonType.BUTTON}
        isDisabled={isActivePage}
        isBasic
      >
        {`${+pageNumber + 1}`}
      </Button>
    </li>
  );
}

export default PageItem;
