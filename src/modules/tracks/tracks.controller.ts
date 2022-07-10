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

  async create(body) {
    return this.post(`v1/tracks`, body, {
      headers: {
        authorization: this.context.token,
      },
    });
  }

  async update({ id, data }) {
    return this.put(`v1/tracks/${id}`, data, {
      headers: {
        authorization: this.context.token,
      },
    });
  }

  async deleteItem(id: string) {
    return this.delete(`v1/tracks/${id}`, {}, {
      headers: {
        authorization: this.context.token,
      },
    });
  }
}
