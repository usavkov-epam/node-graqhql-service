import 'dotenv/config';

import { RESTDataSource } from 'apollo-datasource-rest';

const PORT = process.env.FAVORITES_SERVICE_PORT || 3007;
const HOST = process.env.HOST || 'http://localhost';

export class FavoritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${HOST}:${PORT}`;
  }

  async getAll(searchParams) {
    return this.get('v1/favourites', searchParams, {
      headers: {
        authorization: this.context.token,
      },
    });
  }

  async add(body) {
    return this.put('v1/favourites/add', body, {
      headers: {
        authorization: this.context.token,
      },
    });
  }

  async remove(body) {
    return this.put('v1/favourites/remove', body, {
      headers: {
        authorization: this.context.token,
      },
    });
  }
}
