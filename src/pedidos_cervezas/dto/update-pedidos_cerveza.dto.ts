import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidosCervezaDto } from './create-pedidos_cerveza.dto';
import { ApiProperty } from "@nestjs/swagger";

export class UpdatePedidosCervezaDto extends PartialType(CreatePedidosCervezaDto) {
    
        @ApiProperty({})
            public id_pedido: number;
        @ApiProperty({})
            public id_cerveza: number;
        @ApiProperty({})
            public cantidad: number;
        
}
