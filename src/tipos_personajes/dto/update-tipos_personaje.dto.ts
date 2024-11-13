import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposPersonajeDto } from './create-tipos_personaje.dto';

export class UpdateTiposPersonajeDto extends PartialType(CreateTiposPersonajeDto) {}
