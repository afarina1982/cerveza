import { ApiProperty } from "@nestjs/swagger";

export class CreateComunaDto {
@ApiProperty({})
  public id: number; 

@ApiProperty({})
  public nombre: string;

@ApiProperty({})
  public id_region: string;

}
