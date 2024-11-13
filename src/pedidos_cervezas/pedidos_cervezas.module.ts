import { Module } from '@nestjs/common';
import { PedidosCervezasService } from './pedidos_cervezas.service';
import { PedidosCervezasController } from './pedidos_cervezas.controller';

@Module({
  controllers: [PedidosCervezasController],
  providers: [PedidosCervezasService],
})
export class PedidosCervezasModule {}
