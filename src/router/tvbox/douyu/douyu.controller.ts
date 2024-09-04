import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { DouyuService } from './douyu.service';
import { DirectoryMixListDouyuDto } from './dto/directoryMixList-douyu.dto';
import { SearchDouyuDto } from './dto/search-douyu.dto';

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

  @Get('search')
  async search(@Query() query: SearchDouyuDto) {
    if (!query.keyword) {
      throw new HttpException(
        'Please provide keyword query parameter',
        HttpStatus.BAD_REQUEST,
      );
    }
    const page = query.page || 1;
    const pageSize = query.pageSize || 20;
    const filterType = query.filterType || 0;
    return await this.douyuService.search(
      query.keyword,
      page,
      pageSize,
      filterType,
    );
  }

  @Get('betard/:rid')
  async betard(@Param('rid') rid: string) {
    return await this.douyuService.betard(rid);
  }
}
