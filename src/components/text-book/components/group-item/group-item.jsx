import { Button } from '../../../common/common';
import { IconName, IconSize, ButtonType, AppRoute } from '../../../../common/enums/enums';

import styles from './styles.module.scss';

const GroupItem = ({ groupNumber, currentGroup, onChangeGroup }) => {
  const isActiveGroup = groupNumber === currentGroup;

  const handleChangeGroup = () => {
    onChangeGroup(groupNumber);
  };

  return (
    <li
      className={isActiveGroup ? `${styles.navGroupItem} ${styles.active}` : `${styles.navGroupItem}`}
    >
      <Button
        className={`${styles.menuBtn} ${styles.navGroupBtn}`}
        onClick={handleChangeGroup}
        type={ButtonType.BUTTON}
        isDisabled={isActiveGroup}
        isBasic
      >
        {`Group ${+groupNumber + 1}`}
      </Button>
    </li>
  );
}

export default GroupItem;
