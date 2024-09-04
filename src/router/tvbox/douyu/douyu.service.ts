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

  /**
   * 获取搜索直播间信息
   * @param keyword 搜索关键字
   * @param page 页码
   * @param pageSize 每页数量
   * @param filterType 过滤类型
   */
  async search(
    keyword: string,
    page: number,
    pageSize: number,
    filterType: number,
  ) {
    return await douyu.search(keyword, page, pageSize, filterType);
  }

  /**
   * 获取直播间信息
   * @param rid 直播间ID
   */
  async betard(rid: string) {
    return await douyu.betard(rid);
  }
}
