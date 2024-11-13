import { Injectable } from '@nestjs/common';
import { CreateTiposCervezaDto } from './dto/create-tipos_cerveza.dto';
import { UpdateTiposCervezaDto } from './dto/update-tipos_cerveza.dto';

@Injectable()
export class TiposCervezasService {
  create(createTiposCervezaDto: CreateTiposCervezaDto) {
    return 'This action adds a new tiposCerveza';
  }

  findAll() {
    return `This action returns all tiposCervezas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tiposCerveza`;
  }

  update(id: number, updateTiposCervezaDto: UpdateTiposCervezaDto) {
    return `This action updates a #${id} tiposCerveza`;
  }

  remove(id: number) {
    return `This action removes a #${id} tiposCerveza`;
  }
}
