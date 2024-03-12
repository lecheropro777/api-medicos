import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { MedicosReferentesService } from './medicos-referentes.service';
import { CrearMedicoDto } from './dto/createMedico.dto';
import { ok } from 'assert';
import { UpdateMedicoDto } from './dto/updateMedico.dto';

@Controller('medicos-referentes')
export class MedicosReferentesController {
  constructor(private medicosReferentesService: MedicosReferentesService) {}

  @Get()
  async getMedicosReferentes() {
    return await this.medicosReferentesService.getMedicosReferentes();
  }

  @Get(':id')
  getMedicoReferenteById(@Param('id', ParseIntPipe) id: number) {
    return this.medicosReferentesService.getMedcioReferenteById(id);
  }

  @Post()
  postMedicoReferente(@Body() medico: CrearMedicoDto) {
    return ok(this.medicosReferentesService.postMedicoReferente(medico));
  }

  @Put(':id')
  putMedicoReferente(
    @Param('id', ParseIntPipe) id: number,
    @Body() medico: UpdateMedicoDto,
  ) {
    return this.medicosReferentesService.putMedicoReferente(id, medico);
  }

  @Delete(':id')
  deleteMedioReferente(@Param('id', ParseIntPipe) id: number) {
    return this.medicosReferentesService.deleteMedicoReferente(id);
  }
}
