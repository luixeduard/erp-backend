import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
import { CatchEverythingFilter } from './core/exceptions/everything.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: false },
      whitelist: false
    }),
  );

  app.useGlobalFilters(new CatchEverythingFilter())

  const config = new DocumentBuilder()
    .setTitle('ERP')
    .setDescription('Enterprise Resource Planning')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config,

  );
  SwaggerModule.setup('api', app, documentFactory, { swaggerOptions: { docExpansion: 'none' } });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
