import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposCervezaDto } from './create-tipos_cerveza.dto';

export class UpdateTiposCervezaDto extends PartialType(CreateTiposCervezaDto) {}
