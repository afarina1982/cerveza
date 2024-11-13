import { Module } from '@nestjs/common';
import { PerfilesService } from './perfiles.service';
import { PerfilesController } from './perfiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perfil } from 'src/orm/entity/perfil.entity';

@Module({imports: [TypeOrmModule.forFeature([Perfil])],
  controllers: [PerfilesController],
  providers: [PerfilesService],
})
export class PerfilesModule {}
