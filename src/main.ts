
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs'; 

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:false,
      forbidNonWhitelisted: true,
    })
  )
  await app.listen(envs.port);
  logger.log(`Server running on port ${envs.port}`)
}
bootstrap();