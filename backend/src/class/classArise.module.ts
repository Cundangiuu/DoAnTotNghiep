import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassARISE } from '../entities/classARISE.entity';
import { Staff } from '../entities/staff.entity';
import { ClassService } from './classArise.service';
import { ClassController } from './classArise.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClassARISE, Staff])],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
