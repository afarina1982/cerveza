import { Module } from '@nestjs/common';
import { DatosEnviosService } from './datos_envios.service';
import { DatosEnviosController } from './datos_envios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direccion } from 'src/orm/entity/datos_envio.entity';   

@Module({
  imports: [TypeOrmModule.forFeature([Direccion])],
  controllers: [DatosEnviosController],
  providers: [DatosEnviosService],
  exports: [DatosEnviosService]
})
export class DatosEnviosModule {}

