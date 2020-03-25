import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false
  });

  // set logger
  app.useLogger(new Logger());

  // configure the validation pipe for recived data from request
  app.useGlobalPipes(new ValidationPipe());

  // hint to solve di validator problem
  // useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // swagger configuration
  const options = new DocumentBuilder()
    .setTitle('Class Demo Skeleton')
    .setDescription('This project illustrates a potential skeleton over NestJs backend frameword')
    .setVersion('1.0')
    .addTag('class-demo')
    .build();
  const document =  SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`App listening on port ${port}`);
}
bootstrap();
