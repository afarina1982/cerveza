import { ApiProperty } from "@nestjs/swagger";

export class CreatePedidosCervezaDto {
@ApiProperty({})
    public id_pedido: number;
@ApiProperty({})
    public id_cerveza: number;
@ApiProperty({})
    public cantidad: number;
}
