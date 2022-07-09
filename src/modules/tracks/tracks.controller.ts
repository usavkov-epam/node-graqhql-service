import 'dotenv/config';

import { RESTDataSource } from 'apollo-datasource-rest';

const PORT = process.env.TRACKS_SERVICE_PORT || 3006;
const HOST = process.env.HOST || 'http://localhost';

export class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${HOST}:${PORT}`;
  }

  async getAll(searchParams) {
    return this.get('v1/tracks', searchParams);
  }

  async getById(id: string) {
    return this.get(`v1/tracks/${id}`);
  }
}
