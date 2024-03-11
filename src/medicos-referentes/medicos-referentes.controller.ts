import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Medico } from './models/medicos-referentes.entity';
import { MedicosReferentesService } from './medicos-referentes.service';
import { CrearMedicoDto } from './dto/medico.dto';
import { ok } from 'assert';

@Controller('medicos-referentes')
export class MedicosReferentesController {
  constructor(private medicosReferentesService: MedicosReferentesService) {}

  @Get()
  async getMedicosReferentes(){
    return await this.medicosReferentesService.getMedicosReferentes();
  }

  @Get(':id')
  getMedicoReferenteById(@Param('id', ParseIntPipe) id: number) {
    return this.medicosReferentesService.getMedcioReferenteById(id);
  }

  @Post()
  postMedicoReferente(@Body() medico: CrearMedicoDto) {
    this.medicosReferentesService.postMedicoReferente(medico);
    return ok;
  }

  @Put(':id')
  putMedicoReferente(@Param() id: number, @Body() medico: Medico) {
    return this.medicosReferentesService.putMedicoReferente(id, medico);
  }
}