import { PartialType } from '@nestjs/mapped-types';
import { CreateComunaDto } from './create-comuna.dto';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateComunaDto extends PartialType(CreateComunaDto) {
    @ApiProperty({})
    public id: number;

    @ApiProperty({})
    public nombre: string;

    @ApiProperty({})
    public id_region: string;

}
