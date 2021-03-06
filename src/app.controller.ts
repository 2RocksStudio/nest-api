import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Query,
  Body
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ShopsService } from './shops/shops.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
    private readonly shopService: ShopsService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @UseGuards(JwtAuthGuard)
  @Get('add-dummy')
  addDummy(@Request() req) {
    return this.userService.add();
  }

  @Get('get-shops')
  getShops(@Request() req) {
    return this.shopService.findAll();
  }

  @Post('add-shop')
  addShop(@Request() req, @Body('shop') shop) {
    console.log(shop);
    return this.shopService.add({
      shop: shop,
    });
  }
}
