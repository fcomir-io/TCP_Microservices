# TCP_Microservices

Task consists on 2 Nestjs apps that shall communicate with each other

sample-backend is the master

run the app in a terminal

	npm install
	npm run start:dev

sample-communication is the slave or the service

run the other app in another terminal

	npm install
	npm run start:dev


Now using Postman or similar, send a request to

POST http://localhost:3000

With Body: 

	{
	    "email": "mail1@trx.com",
	    "password": "123456"
	}

Output of backend

	[Nest] 24176  - 31.08.2022, 20:32:31     LOG [NestApplication] Nest application successfully started +1ms
	EMIT Event - user_created
	USER CREATED

Output of communication

	[Nest] 11108  - 31.08.2022, 20:32:27     LOG [NestMicroservice] Nest microservice successfully started +14ms
	HandleUserCreate in Communication
	handleUserCreatedEvent - COMMUNICATIONS { email: 'mail1@trx.com' }



In Docker Compose 

	[6:42:24 PM] Starting compilation in watch mode...
	backend          |
	communication    | [6:42:43 PM] Found 0 errors. Watching for file changes.
	communication    |
	backend          | [6:42:43 PM] Found 0 errors. Watching for file changes.
	backend          |
	communication    | [Nest] 36  - 08/31/2022, 6:42:43 PM     LOG [NestFactory] Starting Nest application...
	communication    | [Nest] 36  - 08/31/2022, 6:42:43 PM     LOG [InstanceLoader] AppModule dependencies initialized +26ms
	communication    | [Nest] 36  - 08/31/2022, 6:42:43 PM     LOG [NestMicroservice] Nest microservice successfully started +13ms
	backend          | [Nest] 35  - 08/31/2022, 6:42:43 PM     LOG [NestFactory] Starting Nest application...
	backend          | [Nest] 35  - 08/31/2022, 6:42:43 PM     LOG [InstanceLoader] ClientsModule dependencies initialized +27ms
	backend          | [Nest] 35  - 08/31/2022, 6:42:43 PM     LOG [InstanceLoader] AppModule dependencies initialized +1ms
	backend          | [Nest] 35  - 08/31/2022, 6:42:43 PM     LOG [RoutesResolver] AppController {/}: +7ms
	backend          | [Nest] 35  - 08/31/2022, 6:42:43 PM     LOG [RouterExplorer] Mapped {/, GET} route +3ms
	backend          | [Nest] 35  - 08/31/2022, 6:42:43 PM     LOG [RouterExplorer] Mapped {/, POST} route +1ms
	backend          | [Nest] 35  - 08/31/2022, 6:42:43 PM     LOG [NestApplication] Nest application successfully started +2ms
	backend          | EMIT Event - user_created
	backend          | Error: connect ECONNREFUSED 127.0.0.1:8877
	backend          |     at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1300:16)