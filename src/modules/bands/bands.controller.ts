import 'dotenv/config';

import { RESTDataSource } from 'apollo-datasource-rest';

const PORT = process.env.BANDS_SERVICE_PORT || 3003;
const HOST = process.env.HOST || 'http://localhost';

export class BandsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${HOST}:${PORT}`;
  }

  async getAll(searchParams) {
    return this.get('v1/bands', searchParams);
  }

  async getById(id: string) {
    return this.get(`v1/bands/${id}`);
  }
}
