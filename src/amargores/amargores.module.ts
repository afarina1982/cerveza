import { Module } from '@nestjs/common';
import { AmargoresService } from './amargores.service';
import { AmargoresController } from './amargores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Amargor } from 'src/orm/entity/amargor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Amargor])],
  controllers: [AmargoresController],
  providers: [AmargoresService],
})
export class AmargoresModule {}
