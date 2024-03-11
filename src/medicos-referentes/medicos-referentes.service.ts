import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { Medico } from './models/medicos-referentes.entity';
import { CrearMedicoDto } from './dto/medico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MedicosReferentesService {
  constructor(
    @InjectRepository(Medico) private medicoRepository: Repository<Medico>,
  ) {}

  async getMedicosReferentes(): Promise<Medico[]> {
    const correoDiagnocons = /diagnocons/;
    let listaLimpia = [];
    let listaMedicos: Medico[];
    listaMedicos = await this.medicoRepository.find();

    for (let medico of listaMedicos) {
      if (medico.correo && !correoDiagnocons.test(medico.correo)) {
        listaLimpia.push(medico);
      }
    }
    return listaLimpia;
  }

  async getMedcioReferenteById(id: number): Promise<CrearMedicoDto> {
    const correoDiagnocons = /diagnocons/;
    let medico: Medico;
    medico = await this.medicoRepository.findOneBy({ id });

    if (medico.correo && !correoDiagnocons.test(medico.correo)) {
      return medico;
    }
    throw new NotFoundException('no encontrado');
  }

  postMedicoReferente(medico: CrearMedicoDto) {
    return medico;
  }

  putMedicoReferente(id: number, medico: CrearMedicoDto) {
    return medico;
  }
}
