import {
  // faAt,
  faBookOpenReader,
  // faCircleNotch,
  faChartColumn,
  // faComment,
  // faCopy,
  faFrown,
  faGear,
  faHeadphonesSimple,
  // faImage,
  // faLock,
  faPersonRunning,
  faPlay,
  // faShareAlt,
  faSignOutAlt,
  faStop,
  // faThumbsDown,
  // faThumbsUp,
  // faUser,
  faUserCircle,


} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';



import { IconName } from '../../../common/enums/enums';

const iconNameToSvgIcon = {
  // [IconName.AT]: faAt,
  [IconName.BOOK_OPEN]: faBookOpenReader,
  // [IconName.COMMENT]: faComment,
  // [IconName.COPY]: faCopy,
  [IconName.FROWN]: faFrown,
  [IconName.GITHUB]: faGithub,
  [IconName.HEAD_PHONE]: faHeadphonesSimple,
  // [IconName.IMAGE]: faImage,
  // [IconName.LOCK]: faLock,
  [IconName.LOG_OUT]: faSignOutAlt,
  [IconName.PLAY]: faPlay,
  // [IconName.SHARE_ALTERNATE]: faShareAlt,
  // [IconName.SPINNER]: faCircleNotch,
  [IconName.SPRINT]: faPersonRunning,
  [IconName.STATISTICS]: faChartColumn,
  [IconName.STOP]: faStop,
  // [IconName.THUMBS_UP]: faThumbsUp,
  // [IconName.THUMBS_DOWN]: faThumbsDown,
  // [IconName.USER]: faUser,
  [IconName.USER_CIRCLE]: faUserCircle
};

export { iconNameToSvgIcon };
