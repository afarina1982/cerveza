import { Module } from '@nestjs/common';
import { ComunasService } from './comunas.service';
import { ComunasController } from './comunas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comuna } from 'src/orm/entity/comuna.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comuna])],
  controllers: [ComunasController],
  providers: [ComunasService],
})
export class ComunasModule {}
