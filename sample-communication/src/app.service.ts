import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreatedEvent - COMMUNICATIONS', data);
    //Email user or whatever
  }
}
