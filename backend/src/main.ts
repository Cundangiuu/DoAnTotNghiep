import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { seed } from './seed';  // đường dẫn đúng đến file seed.ts

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Lấy DataSource từ Nest container
  const dataSource = app.get(DataSource);

  // Khởi tạo nếu chưa khởi tạo
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }

  // Gọi hàm seed
  await seed(dataSource);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(5000);
}
bootstrap();
