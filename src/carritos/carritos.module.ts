import { Module } from '@nestjs/common';
import { CarritoService } from './carritos.service';
import { CarritosController } from './carritos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from 'src/orm/entity/carrito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carrito])],
  controllers: [CarritosController],
  providers: [CarritoService],
})
export class CarritosModule {}
