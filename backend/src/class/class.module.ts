import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassARISE } from '../entities/classARISE.entity'; // đúng đường dẫn
import { ClassService } from './class.service';
import { ClassController } from './class.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClassARISE])],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
