import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { DatosEnviosService } from 'src/datos_envios/datos_envios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/orm/entity/usuario.entity';

@Module({imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [UsuariosService, DatosEnviosService],
})
export class UsuariosModule {}
