import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BuyerController } from 'buyer/src/lib/buyer.controller';
import { BuyerService } from 'buyer/src/lib/buyer.service';

@Module({
  imports: [],
  controllers: [AppController, BuyerController],
  providers: [AppService, BuyerService],
})
export class AppModule {}
