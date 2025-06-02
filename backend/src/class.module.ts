import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassARISE } from './entities/classARISE.entity';
import { ClassController } from './class/class.controller';
import { ClassService } from './class/class.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClassARISE])],
  controllers: [ClassController],
  providers: [ClassService],
  exports: [ClassService],
})
export class ClassModule {}
