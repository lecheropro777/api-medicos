import { Module } from '@nestjs/common';
import { MedicosReferentesModule } from './medicos-referentes/medicos-referentes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'radiology2',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    MedicosReferentesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // constructor(private dataSource:DataSource){}
}
