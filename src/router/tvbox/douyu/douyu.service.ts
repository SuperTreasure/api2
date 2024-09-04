import { Injectable } from '@nestjs/common';
import { Douyu } from './entities/douyu.entity';

const douyu = new Douyu();

@Injectable()
export class DouyuService {
  /**
   * 获取斗鱼分类信息
   */
  async directory() {
    return await douyu.directory();
  }
}
