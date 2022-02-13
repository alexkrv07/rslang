import PropTypes from 'prop-types';
import { imageType } from './image';

const userType = PropTypes.exact({
  userId: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  // image: imageType,
  // imageId: PropTypes.number,
  name: PropTypes.string.isRequired,
  // createdAt: PropTypes.string.isRequired,
  // updatedAt: PropTypes.string.isRequired
});

export { userType };
