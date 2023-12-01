import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BuyerController } from 'buyer/src/lib/buyer.controller';
import { BuyerService } from 'buyer/src/lib/buyer.service';
import { AuthController } from 'auth/src/lib/auth.controller';
import { AuthService } from 'auth/src/lib/auth.service';

@Module({
  imports: [],
  controllers: [AppController, BuyerController, AuthController],
  providers: [AppService, BuyerService, AuthService],
})
export class AppModule {}
