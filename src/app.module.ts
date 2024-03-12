import { Module } from '@nestjs/common';
import { MedicosReferentesModule } from './medicos-referentes/medicos-referentes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { Medico } from './medicos-referentes/models/medicos-referentes.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HostDiagnocons,
      port: parseInt(process.env.PortDiagnocons),
      username: process.env.UsernameDiagnocons,
      password: process.env.PasswordDiagnocons,
      database: process.env.DatabaseDiagnocons,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    MedicosReferentesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  risDataSource = new DataSource({
    type: 'mysql',
    host: process.env.HostRis,
    port: parseInt(process.env.PortRis),
    username: process.env.UsernameRis,
    password: process.env.PasswordRis,
    database: process.env.DatabaseRis,
    entities: [Medico],
  });
}
