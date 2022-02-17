import { HttpMethod, ContentType } from '../../common/enums/enums';

class TextBook  {
  constructor({ apiPath, http }) {
    this._apiPath = apiPath;
    this._http = http;
  }

  getWord(request) {
    const page = request.currentPage;
    const group = request.currentGroup;
    return this._http.load(`${this._apiPath}words?group=${group}&page=${page}`, {
      method: HttpMethod.GET,
      accept: ContentType.JSON,
      hasAuth: false,
    });
  }

  addDifficultWord(payload) {
    return this._http.load(`${this._apiPath}users`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      accept: ContentType.JSON,
      hasAuth: true,
      payload: JSON.stringify(payload)
    });
  }


}

export { TextBook };
