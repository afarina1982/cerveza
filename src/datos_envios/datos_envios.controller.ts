import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosEnviosService } from './datos_envios.service';
import { CreateDatosEnvioDto } from './dto/create-datos_envio.dto';
import { UpdateDatosEnvioDto } from './dto/update-datos_envio.dto';
import { ApiResponse, ApiBody, ApiTags } from '@nestjs/swagger';


@Controller('datos-envios')
@ApiTags('Datos Envios')
export class DatosEnviosController {
  constructor(private readonly datosEnviosService: DatosEnviosService) { }

  @ApiResponse({ status: 201, description: 'Direccion Creada Exitosamente' })
  @ApiResponse({ status: 404, description: 'No se creo la Direccion' })
  @Post()
  @ApiBody({ type: CreateDatosEnvioDto })
  create(@Body() createDatosEnvioDto: CreateDatosEnvioDto) {
    return this.datosEnviosService.create(createDatosEnvioDto);
  }

  @ApiResponse({ status: 200, description: 'Direcciones encontradas' })
  @ApiResponse({ status: 404, description: 'No se encuentra ninguna direccion' })
  @Get()
  findAll() {
    return this.datosEnviosService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Direccion encontrada' })
  @ApiResponse({ status: 404, description: 'No se encuentra la direccion' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datosEnviosService.findOne(+id);
  }

  @ApiResponse({ status: 200, description: 'Direcciones editada correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede editar la direccion' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateDatosEnvioDto: UpdateDatosEnvioDto) {
    return this.datosEnviosService.update(+id, UpdateDatosEnvioDto);
  }

  @ApiResponse({ status: 200, description: 'Direcciones eliminada correctamente' })
  @ApiResponse({ status: 404, description: 'No se puede eliminar la direccion' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datosEnviosService.remove(+id);
  }
}