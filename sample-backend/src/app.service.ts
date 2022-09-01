import { Inject, Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { resourceLimits } from 'worker_threads';
import { CreateUserRequestDTO } from './dtos/create-user-request.dto';
import { CreateUserEvent } from './events/create-user.event';

@Injectable()
export class AppService {
  //private client: ClientProxy;
  private readonly users: any[] = [];

  constructor(
    @Inject('COMMUNICATION') private readonly commClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequestDTO) {
    this.users.push(createUserRequest);
    this.commClient
      .send('user_created', new CreateUserEvent(createUserRequest.email))
      .subscribe((result) => console.log(result));
    console.log('SENT Event - user_created');

    this.analyticsClient.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.email),
    );
    console.log('EMIT Event - user_created');
  }

  getAnalytics():any {
    //return 'Hello Analytics!';
    console.log("SENDING OBJECT - ANALYTICS")
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }
}
