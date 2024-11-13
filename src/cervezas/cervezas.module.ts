import { Module } from '@nestjs/common';
import { CervezasService } from './cervezas.service';
import { CervezasController } from './cervezas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cerveza } from 'src/orm/entity/cerveza.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cerveza])],
  controllers: [CervezasController],
  providers: [CervezasService],
})
export class CervezasModule {}
