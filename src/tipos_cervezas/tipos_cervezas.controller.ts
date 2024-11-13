import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposCervezasService } from './tipos_cervezas.service';
import { CreateTiposCervezaDto } from './dto/create-tipos_cerveza.dto';
import { UpdateTiposCervezaDto } from './dto/update-tipos_cerveza.dto';

@Controller('tipos-cervezas')
export class TiposCervezasController {
  constructor(private readonly tiposCervezasService: TiposCervezasService) {}

  @Post()
  create(@Body() createTiposCervezaDto: CreateTiposCervezaDto) {
    return this.tiposCervezasService.create(createTiposCervezaDto);
  }

  @Get()
  findAll() {
    return this.tiposCervezasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiposCervezasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiposCervezaDto: UpdateTiposCervezaDto) {
    return this.tiposCervezasService.update(+id, updateTiposCervezaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiposCervezasService.remove(+id);
  }
}
