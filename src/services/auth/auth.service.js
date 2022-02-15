import { HttpMethod, ContentType } from '../../common/enums/enums';

class Auth {
  constructor({ apiPath, http }) {
    this._apiPath = apiPath;
    this._http = http;
  }

  login(payload) {
    return this._http.load(`${this._apiPath}signin`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      accept: ContentType.JSON,
      hasAuth: false,
      payload: JSON.stringify(payload)
    });
  }

  registration(payload) {
    return this._http.load(`${this._apiPath}users`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      accept: ContentType.JSON,
      hasAuth: false,
      payload: JSON.stringify(payload)
    });
  }

  // getCurrentUser(userId) {
  //   return this._http.load(`${this._apiPath}/users/${userId}`, {
  //     method: HttpMethod.GET,
  //     contentType: ContentType.JSON,
  //     accept: ContentType.JSON,
  //   });
  // }
}

export { Auth };
