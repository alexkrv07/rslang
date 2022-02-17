import { Http } from './http/http.service';
import { Auth } from './auth/auth.service';
import { BASE_URL } from '../common/constants/constants';
import { TextBook } from './text-book/textbook.service';
import { Storage } from './storage/storage.service';

const storage = new Storage({
  storage: localStorage
});

const http = new Http({
  storage
});

const auth = new Auth({
  apiPath: BASE_URL,
  http
});

const textBook = new TextBook({
  apiPath: BASE_URL,
  http
});

export { http, storage, auth, textBook };
