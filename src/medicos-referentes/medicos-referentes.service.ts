import { Injectable, NotFoundException } from '@nestjs/common';
import { Medico } from './models/medicos-referentes.entity';
import { CrearMedicoDto } from './dto/createMedico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UpdateMedicoDto } from './dto/updateMedico.dto';
import { IMedicosReferentes } from './medicos-referentes.interface';

@Injectable()
export class MedicosReferentesService implements IMedicosReferentes {
  constructor(
    @InjectRepository(Medico) private medicoRepository: Repository<Medico>,
    private RisDataSource: DataSource,
  ) {}

  correoDiagnocons = /diagnocons/;
  risDataSource = this.RisDataSource.getRepository(Medico);

  async getMedicosReferentes(): Promise<Medico[]> {
    const buscarEnElRis = this.risDataSource.find();
    let listaLimpia = [];
    let listaMedicos: Medico[];
    listaMedicos = await this.medicoRepository.find();
    let listaTotal: Medico[];

    for (let medico of listaTotal) {
      if (medico.correo && !this.correoDiagnocons.test(medico.correo)) {
        listaLimpia.push(medico);
      }
    }
    return listaLimpia;
  }

  async getMedcioReferenteById(id: number): Promise<Medico> {
    let medico: Medico;
    medico = await this.medicoRepository.findOneBy({ id });

    if (medico.correo && !this.correoDiagnocons.test(medico.correo)) {
      return medico;
    }
    throw new NotFoundException('no encontrado');
  }

  async postMedicoReferente(medico: CrearMedicoDto): Promise<Medico> {
    // const query = await this.medicoRepository.createQueryBuilder('medico')
    // await query.where(`medico.nombres Like :nombres`,{nombres:`%${medico.nombres}`})
    // const similares=await query.getMany()
    // console.log(similares)
    return await this.medicoRepository.save(medico);
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

  async deleteMedicoReferente(id: number): Promise<void> {
    const encontrarMedico = await this.medicoRepository.findOneBy({ id });
    console.log(encontrarMedico);
    if (!encontrarMedico) {
      throw new NotFoundException('No encontrado');
    }
    this.medicoRepository.delete({ id });
  }
}
