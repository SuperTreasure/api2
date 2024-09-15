import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(@Res() res: Response) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(this.appService.getHome());
  }
}
