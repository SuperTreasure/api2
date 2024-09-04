import { Test, TestingModule } from '@nestjs/testing';
import { DouyuController } from './douyu.controller';
import { DouyuService } from './douyu.service';

describe('DouyuController', () => {
  let controller: DouyuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DouyuController],
      providers: [DouyuService],
    }).compile();

    controller = module.get<DouyuController>(DouyuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
