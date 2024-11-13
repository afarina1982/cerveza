import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmargoresService } from './amargores.service';
import { CreateAmargoreDto } from './dto/create-amargore.dto';
import { UpdateAmargoreDto } from './dto/update-amargore.dto';

@Controller('amargores')
export class AmargoresController {
  constructor(private readonly amargoresService: AmargoresService) {}

  @Post()
  create(@Body() createAmargoreDto: CreateAmargoreDto) {
    return this.amargoresService.create(createAmargoreDto);
  }

  @Get()
  findAll() {
    return this.amargoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.amargoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmargoreDto: UpdateAmargoreDto) {
    return this.amargoresService.update(+id, updateAmargoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.amargoresService.remove(+id);
  }
}
