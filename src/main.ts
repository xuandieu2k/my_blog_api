declare const module: any;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
// import { ValidationPipe } from './validation.pipe';
dotenv.config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000;
  app.enableCors();
  // Validate
  // app.useGlobalPipes(new ValidationPipe())

  // config swagger
  const config = new DocumentBuilder()
    .setTitle('My Blog API')
    .setDescription('My Blog API description')
    .setVersion('1.0')
    .addTag('My Blog')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
