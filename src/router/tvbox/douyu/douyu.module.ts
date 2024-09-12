import { Module } from '@nestjs/common';
import { DouyuService } from './douyu.service';
import { DouyuController } from './douyu.controller';

@Module({
  controllers: [DouyuController],
  providers: [DouyuService],
})
export class DouyuModule {}
