import { Test } from '@nestjs/testing';
import { BuyerService } from './buyer.service';

describe('BuyerService', () => {
  let service: BuyerService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BuyerService],
    }).compile();

    service = module.get(BuyerService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
