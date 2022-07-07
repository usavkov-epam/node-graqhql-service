import 'dotenv/config';

import { RESTDataSource } from 'apollo-datasource-rest';

const PORT = process.env.ARTISTS_SERVICE_PORT || 3002;
const HOST = process.env.HOST || 'http://localhost';

export class ArtistsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${HOST}:${PORT}`;
  }

  async getAll(searchParams) {
    return this.get('v1/artists', searchParams);
  }

  async getById(id: string) {
    return this.get(`v1/artists/${id}`);
  }
}
