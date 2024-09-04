import { Module } from '@nestjs/common';
import { DouyuModule } from './douyu/douyu.module';

@Module({
  imports: [DouyuModule]
})
export class TvboxModule {}
