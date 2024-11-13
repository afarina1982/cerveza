import { Module } from '@nestjs/common';
import { TiposPersonajesService } from './tipos_personajes.service';
import { TiposPersonajesController } from './tipos_personajes.controller';

@Module({
  controllers: [TiposPersonajesController],
  providers: [TiposPersonajesService],
})
export class TiposPersonajesModule {}
