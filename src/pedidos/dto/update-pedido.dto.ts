import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { CreateDatosEnvioDto } from 'src/datos_envios/dto/create-datos_envio.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsPhoneNumber, IsString, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { IsDate, ValidateNested } from 'class-validator';
import { estadoPedidos } from "src/enum/estado-pedidos";
import { Direccion } from "src/orm/entity/datos_envio.entity";
import { Cerveza } from "src/orm/entity/cerveza.entity";
import { TipoCerveza } from "src/enum/tipos-cerveza";


export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {

    @IsNotEmpty({ message: 'La lista de cervezas a comprar es requerida' })
    @ApiProperty({ default: 'Pale Ale' ,description: 'Tipos de Cerveza' , enum: TipoCerveza})
    public items: Cerveza[];

    @IsNotEmpty({ message: 'El estado del pedido es requerido' })
    @ApiProperty({ default: 'creado',description:'estado del pedido', enum: estadoPedidos })
    public estado: estadoPedidos // creado, aceptado, pagado, enviado, entregado, etc. Enum

    @IsNotEmpty({ message: 'La fecha de ingreso del pedido es requerida' })
    @Type(() => Date)
    @IsDate({ message: 'La fecha de ingreso del pedido debe ser una fecha' })
    @ApiProperty({ default:'2024-07-21',description: 'Fecha ingreso del pedido' })
    public fecha_ingreso: Date //Autogenerado

    @IsNotEmpty({ message: 'La dirección de entrega del pedido es requerida' })
    @ValidateNested({ each: true })
    @Type(() => CreateDatosEnvioDto)
    @ApiProperty({ default: CreateDatosEnvioDto, type: [CreateDatosEnvioDto] })
    public direccion_entrega: Direccion //puede ser local o envio a tercerohecho // ====== se deberia modificar direccion ya que viene de una clase =====

    @IsNotEmpty({ message: 'El correo del comprador es requerido' })
    @IsEmail({}, { message: 'El correo del comprador debe ser un correo válido' })
    @ApiProperty({ default: '656@345.cl', description:'correo del usuario' }) // 
    public correo_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.

    @IsString({ message: 'El número telefónico del comprador debe ser un texto' })
    @IsPhoneNumber('CL', { message: 'El Movil del comprador debe ser un número de Chile' })
    @Matches(/^\d{9}$/, { message: 'El Movil del comprador debe ser un número de 9 dígitos' })
    @ApiProperty({ default: '980765432' })
    public telefono_comprador: string //se puede sacar del modelo usuario si esta logeado. Si no, se solicita.

    @IsNotEmpty({ message: 'La fecha de entrega del pedido es requerida' })
    @Type(() => Date)
    @IsDate({ message: 'La fecha de entrega del pedido debe ser una fecha' })
    @ApiProperty({ default: '2024-03-03', description: 'Fecha de entrega del pedido' })
    public fecha_entrega: Date //entrega física o envío
}