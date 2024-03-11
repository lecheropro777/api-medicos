import { Module } from '@nestjs/common';
import { MedicosReferentesController } from './medicos-referentes.controller';
import { MedicosReferentesService } from './medicos-referentes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medico } from './models/medicos-referentes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medico])],
  controllers: [MedicosReferentesController],
  providers: [MedicosReferentesService],
})
export class MedicosReferentesModule {}
