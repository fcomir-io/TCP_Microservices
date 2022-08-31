import { Inject, Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateUserRequestDTO } from './dtos/create-user-request.dto';
import { CreateUserEvent } from './events/create-user.event';

@Injectable()
export class AppService {
  private client: ClientProxy;
  private readonly users: any[] = [];

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'backend',
        port: 8877,
      },
    });
  }

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequestDTO) {
    this.users.push(createUserRequest);
    this.client
      .send('user_created', new CreateUserEvent(createUserRequest.email))
      .subscribe((result) => console.log(result));
    console.log('EMIT Event - user_created');
  }
}
