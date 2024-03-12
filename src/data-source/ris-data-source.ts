import 'reflect-metadata';
import { Medico } from 'src/medicos-referentes/models/medicos-referentes.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '172.17.207.84',
  port: 3306,
  username: 'java',
  password: 'javazxcasdqwe123diagnocons',
  database: 'radiology2',
  entities: [Medico],
});

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));
