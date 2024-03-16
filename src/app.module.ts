import { Module } from '@nestjs/common';
import { MedicosReferentesModule } from './medicos-referentes/medicos-referentes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { Medico } from './medicos-referentes/models/medicos-referentes.entity';
import config from './config/configuration'
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    TypeOrmModule.forRoot({
      
    }),
    MedicosReferentesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
