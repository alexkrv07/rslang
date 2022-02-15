import { ENV } from '../common/enums/enums';
import { Http } from './http/http.service';
import { Auth } from './auth/auth.service';
import { BASE_URL } from '../common/constants/constants';
// import { Comment } from './comment/comment.service';
// import { Image } from './image/image.service';
// import { Post } from './post/post.service';
import { Storage } from './storage/storage.service';

const storage = new Storage({
  storage: localStorage
});

const http = new Http({
  storage
});

const auth = new Auth({
  // apiPath: ENV.API_PATH,
  apiPath: BASE_URL,
  http
});

// const comment = new Comment({
//   apiPath: ENV.API_PATH,
//   http
// });

// const post = new Post({
//   apiPath: ENV.API_PATH,
//   http
// });

// const image = new Image({
//   apiPath: ENV.API_PATH,
//   http
// });

// export { http, storage, auth, comment, post, image };
export { http, storage, auth };
