import { Injectable } from '@nestjs/common';
import { CreatePedidosCervezaDto } from './dto/create-pedidos_cerveza.dto';
import { UpdatePedidosCervezaDto } from './dto/update-pedidos_cerveza.dto';

@Injectable()
export class PedidosCervezasService {
  create(createPedidosCervezaDto: CreatePedidosCervezaDto) {
    return 'This action adds a new pedidosCerveza';
  }

  findAll() {
    return `This action returns all pedidosCervezas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidosCerveza`;
  }

  update(id: number, updatePedidosCervezaDto: UpdatePedidosCervezaDto) {
    return `This action updates a #${id} pedidosCerveza`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidosCerveza`;
  }
}
