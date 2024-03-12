import { Injectable, NotFoundException } from '@nestjs/common';
import { Medico } from './models/medicos-referentes.entity';
import { CrearMedicoDto } from './dto/createMedico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateMedicoDto } from './dto/updateMedico.dto';
import { ok } from 'assert';

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

  async postMedicoReferente(medico: CrearMedicoDto): Promise<CrearMedicoDto> {
    const guardarMedico = await this.medicoRepository.save(medico);
    console.log(guardarMedico);
    return medico;
  }

  async putMedicoReferente(
    id: number,
    medico: UpdateMedicoDto,
  ): Promise<Medico> {
    const encontrarMedico = await this.medicoRepository.findOneBy({ id });
    if (!encontrarMedico) {
      throw new NotFoundException('No encontrado');
    }
    const resultadoActualizacion = await this.medicoRepository.update(
      id,
      medico,
    );
    if (resultadoActualizacion.affected > 0) {
      const medicoActualizado = await this.medicoRepository.findOneBy({ id });
      if (medicoActualizado) {
        return medicoActualizado;
      }
      throw new NotFoundException('No encontrado');
    }
  }

  async deleteMedicoReferente(id: number) {
    const encontrarMedico = await this.medicoRepository.findOneBy({ id });
    console.log(encontrarMedico)
    if (!encontrarMedico) {
      throw new NotFoundException('No encontrado');
    }
    this.medicoRepository.delete({ id });
    return;
  }
}
