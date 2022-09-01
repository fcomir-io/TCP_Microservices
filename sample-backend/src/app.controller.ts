import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserRequestDTO } from './dtos/create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() createUserRequest: CreateUserRequestDTO) {
    this.appService.createUser(createUserRequest);
  }

  @Get('analytics')
  getAnalytics() :string{
    console.log("GET ANALYTICS")
    return this.appService.getAnalytics();
  }
  
}
