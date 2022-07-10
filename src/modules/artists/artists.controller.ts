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

  
  async create(body) {
    return this.post(`v1/artists`, body, {
      headers: {
        authorization: this.context.token,
      },
    });
  }

  async update({ id, data }) {
    return this.put(`v1/artists/${id}`, data, {
      headers: {
        authorization: this.context.token,
      },
    });
  }

  async deleteItem(id: string) {
    return this.delete(`v1/artists/${id}`, {}, {
      headers: {
        authorization: this.context.token,
      },
    });
  }
}
