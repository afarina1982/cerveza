import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from 'src/orm/entity/pedido.entity';
import { DatosEnviosModule } from 'src/datos_envios/datos_envios.module';

@Module({imports: [TypeOrmModule.forFeature([Pedido]), DatosEnviosModule],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
