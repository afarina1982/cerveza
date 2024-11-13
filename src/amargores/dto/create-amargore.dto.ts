import { ApiProperty } from "@nestjs/swagger";
import { Cerveza } from "src/orm/entity/cerveza.entity";
export class CreateAmargoreDto {


@ApiProperty({})
    public id: string;

@ApiProperty({})
    public nivel: string;

@ApiProperty({})
    public descripcion: string;

@ApiProperty({})
    cervezas: Cerveza[];
}
