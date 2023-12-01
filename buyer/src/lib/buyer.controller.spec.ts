import { Test } from '@nestjs/testing';
import { BuyerController } from './buyer.controller';
import { BuyerService } from './buyer.service';

describe('BuyerController', () => {
  let controller: BuyerController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BuyerService],
      controllers: [BuyerController],
    }).compile();

    controller = module.get(BuyerController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
