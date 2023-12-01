import { Controller, Get } from '@nestjs/common';
import { BuyerService } from './buyer.service';

@Controller('buyer')
export class BuyerController {
  constructor(private buyerService: BuyerService) {}

  @Get()
  async getAllBuyers() {
    return await this.buyerService.getAllBuyers();
  }
}
