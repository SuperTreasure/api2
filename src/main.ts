import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({ type: VersioningType.URI });
  await app.listen(5253, '0.0.0.0', () => {
    console.log(`Server start on http://0.0.0.0:5253`);
  });
}
bootstrap();
