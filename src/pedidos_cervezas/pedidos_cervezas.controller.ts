import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidosCervezasService } from './pedidos_cervezas.service';
import { CreatePedidosCervezaDto } from './dto/create-pedidos_cerveza.dto';
import { UpdatePedidosCervezaDto } from './dto/update-pedidos_cerveza.dto';

@Controller('pedidos-cervezas')
export class PedidosCervezasController {
  constructor(private readonly pedidosCervezasService: PedidosCervezasService) {}

  @Post()
  create(@Body() createPedidosCervezaDto: CreatePedidosCervezaDto) {
    return this.pedidosCervezasService.create(createPedidosCervezaDto);
  }

  @Get()
  findAll() {
    return this.pedidosCervezasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidosCervezasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidosCervezaDto: UpdatePedidosCervezaDto) {
    return this.pedidosCervezasService.update(+id, updatePedidosCervezaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidosCervezasService.remove(+id);
  }
}
