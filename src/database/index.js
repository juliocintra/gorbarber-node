import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // cria a conexão com o banco
    this.connection = new Sequelize(databaseConfig);

    // Pra cada model é passado para o método `init` a conaxão criada
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
