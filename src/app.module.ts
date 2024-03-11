import { Module } from '@nestjs/common';
import { MedicosReferentesModule } from './medicos-referentes/medicos-referentes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '',
    port: ,
    username: '',
    password: '',
    database: '',
    entities:[__dirname + '/**/*.entity{.ts,.js}'],
  }),
  MedicosReferentesModule],
  controllers: [],
  providers: [],
})
export class AppModule {

  // constructor(private dataSource:DataSource){}
}
