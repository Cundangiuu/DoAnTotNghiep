import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Student } from './entities/student.entity';
import { Grade } from './entities/grade.entity';
import { TestType } from './entities/testType.entity';
import { Discount } from './entities/discount.entity';
import { Attendance } from './entities/attendance.entity';
import { Staff } from './entities/staff.entity';
import { Role } from './entities/role.entity';
import { StaffRole } from './entities/staffRole.entity';
import { Course } from './entities/course.entity';
import { Lesson } from './entities/lesson.entity';
import { ClassARISE } from './entities/classARISE.entity';
import { ClassSchedule } from './entities/classSchedule.entity';
import { ClassDay } from './entities/classDay.entity';
import { StaffClass } from './entities/staffClass.entity';
import { Enrollment } from './entities/enrollment.entity';
import { Invoice } from './entities/invoice.entity';
import { HolidaySchedule } from './entities/holidaySchedule.entity';
import { AutomatedReport } from './entities/automatedReport.entity';
import { ClassModule } from './class/classArise.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'DoAnHeThongGiaoDuc',
      entities: [
        Student,
        Grade,
        TestType,
        Discount,
        Attendance,
        Staff,
        Role,
        StaffRole,
        Course,
        Lesson,
        ClassARISE,
        ClassSchedule,
        ClassDay,
        StaffClass,
        Enrollment,
        Invoice,
        HolidaySchedule,
        AutomatedReport,
      ],
      synchronize: true,
    }),
    ClassModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
