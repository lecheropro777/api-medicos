import { IsDateString, IsDecimal, IsEmail, IsString } from 'class-validator';

export class CrearMedicoDto {
  @IsString()
  nombres: string;
  @IsString()
  apellidos: string;
  @IsString()
  especialidad: string;
  @IsString()
  telefono: string;
  @IsString()
  correo: string;
  @IsString()
  direccion: string;
  @IsDateString()
  fecha_nacimiento: Date;
  @IsDecimal()
  sexo: number;
  @IsString()
  cedula_federal: string;
  @IsString()
  cedula_estatal: string;
}
