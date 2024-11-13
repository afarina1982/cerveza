import { Injectable } from '@nestjs/common';
import { CreateAmargoreDto } from './dto/create-amargore.dto';
import { UpdateAmargoreDto } from './dto/update-amargore.dto';

@Injectable()
export class AmargoresService {
  create(createAmargoreDto: CreateAmargoreDto) {
    return 'This action adds a new amargore';
  }

  findAll() {
    return `This action returns all amargores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} amargore`;
  }

  update(id: number, updateAmargoreDto: UpdateAmargoreDto) {
    return `This action updates a #${id} amargore`;
  }

  remove(id: number) {
    return `This action removes a #${id} amargore`;
  }
}
