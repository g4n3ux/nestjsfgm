import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlobalService } from './global.service';
import { GlobalResolver } from './global.resolver';
import { Global } from './entities/global.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Global])],
  providers: [GlobalResolver, GlobalService],
})
export class GlobalModule {}
