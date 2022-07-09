import 'dotenv/config';

import { RESTDataSource } from 'apollo-datasource-rest';

const PORT = process.env.GENRES_SERVICE_PORT || 3001;
const HOST = process.env.HOST || 'http://localhost';

export class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${HOST}:${PORT}`;
  }

  async getAll(searchParams) {
    return this.get('v1/genres', searchParams);
  }

  async getById(id: string) {
    return this.get(`v1/genres/${id}`);
  }
}
