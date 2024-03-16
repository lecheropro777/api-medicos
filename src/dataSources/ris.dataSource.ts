import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Medico } from 'src/medicos-referentes/models/medicos-referentes.entity';
import { DataSource } from 'typeorm';
@Module({
  imports: [ConfigModule],
  // ...
})
export class RisDataSource {
  constructor(private configService: ConfigService) {
    const dbUser = this.configService.get<string>('HostDiagnocons');
    console.log(dbUser);
  }
  
  DiagnoconsDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'java',
    password: 'javazxcasdqwe123diagncons',
    database: 'radiology2',
    entities: [Medico],
  });
}
