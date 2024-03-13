import { Medico } from './models/medicos-referentes.entity';
import { CrearMedicoDto } from './dto/createMedico.dto';
import { UpdateMedicoDto } from './dto/updateMedico.dto';

export interface IMedicosReferentes {
  getMedicosReferentes(): Promise<Medico[]>;

  getMedcioReferenteById(id: number): Promise<Medico>;

  postMedicoReferente(medico: CrearMedicoDto): Promise<Medico>;

  putMedicoReferente(id: number, medico: UpdateMedicoDto): Promise<Medico>;

  deleteMedicoReferente(id: number):Promise<void>;
}
