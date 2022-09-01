import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'micro_service_anly',   // container name
        port: 3011,
      },
    },
  );
  app.listen();
  console.log("AMALYTICS is up")
}
bootstrap();
