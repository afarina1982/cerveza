import { PartialType } from '@nestjs/mapped-types';
import { CreateAmargoreDto } from './create-amargore.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Cerveza } from 'src/orm/entity/cerveza.entity';

export class UpdateAmargoreDto extends PartialType(CreateAmargoreDto) {
    @ApiProperty({})
    public id: string;

@ApiProperty({})
    public nivel: string;

@ApiProperty({})
    public descripcion: string;

@ApiProperty({})
    cervezas: Cerveza[];
}


