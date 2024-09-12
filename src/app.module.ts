import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TvboxModule } from './router/tvbox/tvbox.module';

@Module({
  imports: [TvboxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
