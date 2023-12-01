import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateBuyer } from './dto/buyer/createbuyer.dto';
import { LoginBuyer } from './dto/buyer/loginbuyer.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // BUYER AUTH

  @Post('buyer/signup')
  async buyerSignup(@Body() data: CreateBuyer) {
    return await this.authService.buyerSignup(data);
  }

  @Post('buyer/signin')
  async buyerSignin(@Body() data: LoginBuyer) {
    return await this.authService.buyerSignin(data);
  }
}
