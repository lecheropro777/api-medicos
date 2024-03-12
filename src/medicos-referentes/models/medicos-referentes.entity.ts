import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"medico"})
export class Medico {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombres: string;
  @Column()
  apellidos: string;
  @Column()
  especialidad: string;
  @Column()
  telefono: string;
  @Column()
  correo: string;
  @Column()
  direccion: string;
  @Column()
  fecha_nacimiento: Date;
  @Column()
  whatsapp: string;
  @Column()
  token: string;
  @Column()
  radiologo: number;
  @Column()
  firma: string;
  @Column()
  sexo: number;
  @Column()
  cedula_federal: string;
  @Column()
  cedula_estatal: string;
  @Column()
  es_local: boolean;
  @Column()
  usuario: string;
}
