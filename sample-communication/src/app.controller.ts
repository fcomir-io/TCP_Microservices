import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './events/create-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //@EventPattern('user_created')
  @MessagePattern('user_created')
  handleUserCreatedEvent(data: CreateUserEvent) {
    console.log("HandleUserCreate in Communication");
    this.appService.handleUserCreated(data);
    return("USER CREATED");
  }
}
