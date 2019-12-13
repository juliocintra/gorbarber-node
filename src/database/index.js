import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // cria a conexão com o banco
    this.connection = new Sequelize(databaseConfig);

    // Pra cada model é passado para o método `init` a conaxão criada
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));

    // associate verifica se nas models alguma delas possui relação
  }
}

export default new Database();
