import 'dotenv/config';

import { RESTDataSource } from 'apollo-datasource-rest';

const PORT = process.env.USERS_SERVICE_PORT || 3004;
const HOST = process.env.HOST || 'http://localhost';

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${HOST}:${PORT}`;
  }

  async getById(id: string) {
    return this.get(`v1/users/${id}`);
  }

  async login(body) {
    return this.post(`v1/users/login`, body);
  }
}
