import { Injectable } from '@nestjs/common';
import { CreateDatosEnvioDto } from './dto/create-datos_envio.dto';
import { UpdateDatosEnvioDto } from './dto/update-datos_envio.dto';

@Injectable()
export class DatosEnviosService {
  private direcciones = [];
  create(createDatosEnvioDto: CreateDatosEnvioDto) {
    return `Se creo la siguiente direccion: ${JSON.stringify(createDatosEnvioDto)}`;
 }

 findAll() {
   return this.direcciones;
 }

 findOne(id: number) {
   return this.direcciones.find(direccion => direccion.idUsuario == id);
 }

 update(id: number, updateDatosEnvioDto: UpdateDatosEnvioDto) {
   return `Se edito la siguiente direccion: ${JSON.stringify(updateDatosEnvioDto)}`;
 }

 remove(id: number) {
     return `Se elimno la direccion con Id #${id}`;
 }
}
