import 'dotenv/config';

import { RESTDataSource } from 'apollo-datasource-rest';

const PORT = process.env.ALBUMS_SERVICE_PORT || 3005;
const HOST = process.env.HOST || 'http://localhost';

export class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${HOST}:${PORT}`;
  }

  async getAll(searchParams) {
    return this.get('v1/albums', searchParams);
  }

  async getById(id: string) {
    return this.get(`v1/albums/${id}`);
  }
}
