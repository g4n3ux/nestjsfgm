import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateGlobalInput } from './dto/create-global.input';
import { UpdateGlobalInput } from './dto/update-global.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Global } from './entities/global.entity';

@Injectable()
export class GlobalService {

  constructor(@InjectRepository(Global) private  globalRepository: Repository<Global>){}

  create(createGlobalInput: CreateGlobalInput) {
    const newglobal = this.globalRepository.create(createGlobalInput)
    console.log(newglobal)
    return this.globalRepository.save(newglobal)
  }

  findAll() {
    return `This action returns all global`;
  }

  findOne(id: number) {
    return `This action returns a #${id} global`;
  }

  update(id: number, updateGlobalInput: UpdateGlobalInput) {
    return `This action updates a #${id} global`;
  }

  remove(id: number) {
    return `This action removes a #${id} global`;
  }
}
