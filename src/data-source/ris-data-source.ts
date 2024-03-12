import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import 'reflect-metadata';
import { Medico } from 'src/medicos-referentes/models/medicos-referentes.entity';
import { DataSource } from 'typeorm';
@Module({
  imports: [ConfigModule],
  // ...
})
export class RisDataSource {
  constructor(private configService?: ConfigService) {
    
  }
//   db=this.configService.get<string>("DatabaseRis")
//   risDataSource = new DataSource({
//     type: 'mysql',
//     host: "",
//     port: parseInt(process.env.PortRis),
//     username: process.env.UsernameRis,
//     password: '',
//     database: this.db,
//     entities: [Medico],
//   });
// }
}
