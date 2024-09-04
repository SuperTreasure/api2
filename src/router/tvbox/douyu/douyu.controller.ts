import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DouyuService } from './douyu.service';
import { DirectoryMixListDouyuDto } from './dto/directoryMixList-douyu.dto';

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

  @Get('directoryMixList')
  async directoryMixList(@Query() query: DirectoryMixListDouyuDto) {
    if (!query.cid2) {
      throw new HttpException(
        'Please provide cid2 query parameter',
        HttpStatus.BAD_REQUEST,
      );
    }
    const page = query.page || 1;
    return await this.douyuService.directoryMixList(query.cid2, page);
  }
}
