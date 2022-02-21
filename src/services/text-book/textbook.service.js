import { HttpMethod, ContentType } from '../../common/enums/enums';

class TextBook  {
  constructor({ apiPath, http }) {
    this._apiPath = apiPath;
    this._http = http;
  }

  getWord(request) {
    const page = request.currentPage;
    const group = request.currentGroup;
    console.log('page', page, 'group', group)
    return this._http.load(`${this._apiPath}words?group=${group}&page=${page}`, {
      method: HttpMethod.GET,
      accept: ContentType.JSON,
      hasAuth: false,
    });
  }

  addDifficultWord(request) {
    const {wordId, userId, payload} = request;
    return this._http.load(`${this._apiPath}users/${userId}/words/${wordId}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      accept: ContentType.JSON,
      hasAuth: true,
      payload: JSON.stringify(payload)
    });
  }

  updateDifficultWord(request) {
    const {wordId, userId, payload} = request;
    return this._http.load(`${this._apiPath}users/${userId}/words/${wordId}`, {
      method: HttpMethod.PUT,
      contentType: ContentType.JSON,
      accept: ContentType.JSON,
      hasAuth: true,
      payload: JSON.stringify(payload)
    });
  }

  getDifficultWordIdList(userId) {
    return this._http.load(`${this._apiPath}users/${userId}/words`, {
      method: HttpMethod.GET,
      contentType: ContentType.JSON,
      accept: ContentType.JSON,
      hasAuth: true,
    });
  }

  getDifficultWordList(difficultWordIdList) {
    const requests = difficultWordIdList.map(difficultWordId => this._http.load(`${this._apiPath}words/${difficultWordId}`, {
      method: HttpMethod.GET,
      accept: ContentType.JSON,
      hasAuth: false,
    }));
    return Promise.all(requests);
  }

}

export { TextBook };
