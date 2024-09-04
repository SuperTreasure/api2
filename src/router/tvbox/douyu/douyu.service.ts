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

  /**
   * 获取斗鱼分类下的直播间列表
   * @param cid2 分类ID
   * @param page 页码
   */
  async directoryMixList(cid2: number, page: number) {
    return await douyu.directoryMixList(cid2, page);
  }
}
