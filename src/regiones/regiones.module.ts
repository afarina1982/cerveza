import { Module } from '@nestjs/common';
import { RegionesService } from './regiones.service';
import { RegionesController } from './regiones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from 'src/orm/entity/region.entity';

@Module({imports: [TypeOrmModule.forFeature([Region])],
  controllers: [RegionesController],
  providers: [RegionesService],
})
export class RegionesModule {}
