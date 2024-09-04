import { Controller, Get } from '@nestjs/common';
import { DouyuService } from './douyu.service';

@Controller({
  path: 'tvbox/douyu',
  version: '1',
})
export class DouyuController {
  constructor(private readonly douyuService: DouyuService) {}

  @Get('directory')
  async directory() {
    return await this.douyuService.directory();
  }
}
