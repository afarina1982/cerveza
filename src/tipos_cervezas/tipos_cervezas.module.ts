import { Module } from '@nestjs/common';
import { TiposCervezasService } from './tipos_cervezas.service';
import { TiposCervezasController } from './tipos_cervezas.controller';

@Module({
  controllers: [TiposCervezasController],
  providers: [TiposCervezasService],
})
export class TiposCervezasModule {}
