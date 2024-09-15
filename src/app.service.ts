import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): string {
    return `一些自用的API接口`;
  }
}
