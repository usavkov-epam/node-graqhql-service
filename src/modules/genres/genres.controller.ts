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

  async create(body) {
    return this.post(`v1/genres`, body, {
      headers: {
        authorization: this.context.token,
      },
    });
  }

  async update({ id, data }) {
    return this.put(`v1/genres/${id}`, data, {
      headers: {
        authorization: this.context.token,
      },
    });
  }

  async deleteItem(id: string) {
    return this.delete(`v1/genres/${id}`, {}, {
      headers: {
        authorization: this.context.token,
      },
    });
  }
}
