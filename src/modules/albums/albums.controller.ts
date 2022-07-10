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

  async create(body) {
    return this.post(`v1/albums`, body, {
      headers: {
        authorization: this.context.token,
      },
    });
  }

  async update({ id, data }) {
    return this.put(`v1/albums/${id}`, data, {
      headers: {
        authorization: this.context.token,
      },
    });
  }

  async deleteItem(id: string) {
    return this.delete(`v1/albums/${id}`, {}, {
      headers: {
        authorization: this.context.token,
      },
    });
  }
}
