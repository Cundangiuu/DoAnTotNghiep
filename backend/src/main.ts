import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { seed } from './seed';  // đường dẫn đúng đến file seed.ts
import { Discount } from './entities/discount.entity';
import { Course } from './entities/course.entity';
import { ClassSchedule } from './entities/classSchedule.entity';
import { ClassARISE } from './entities/classARISE.entity';
import { Lesson } from './entities/lesson.entity';
import { ClassDay } from './entities/classDay.entity';
import { Student } from './entities/student.entity';
import { TestType } from './entities/testType.entity';
import { Grade } from './entities/grade.entity';
import { Attendance } from './entities/attendance.entity';
import { Staff } from './entities/staff.entity';
import { Role } from './entities/role.entity';
import { StaffRole } from './entities/staffRole.entity';
import { StaffClass } from './entities/staffClass.entity';
import { Enrollment } from './entities/enrollment.entity';
import { Invoice } from './entities/invoice.entity';
import { HolidaySchedule } from './entities/holidaySchedule.entity';
import { AutomatedReport } from './entities/automatedReport.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- THÊM ĐOẠN CẤU HÌNH CORS NÀY VÀO ĐÂY ---
  app.enableCors({
    origin: 'http://localhost:3000', // Cho phép yêu cầu từ origin của frontend Next.js
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Cho phép các phương thức HTTP cần thiết
    credentials: true, // Cho phép gửi cookies (nếu có, thường không cần cho API đơn giản)
  });
  // ------------------------------------------


  const dataSource = app.get(DataSource);

  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }

  // Lấy các repo
  const discountRepo = dataSource.getRepository(Discount);
  const courseRepo = dataSource.getRepository(Course);
  const classScheduleRepo = dataSource.getRepository(ClassSchedule);
  const classAriseRepo = dataSource.getRepository(ClassARISE);
  const lessonRepo = dataSource.getRepository(Lesson);
  const classDayRepo = dataSource.getRepository(ClassDay);
  const studentRepo = dataSource.getRepository(Student);
  const testTypeRepo = dataSource.getRepository(TestType);
  const gradeRepo = dataSource.getRepository(Grade);
  const attendanceRepo = dataSource.getRepository(Attendance);
  const staffRepo = dataSource.getRepository(Staff);
  const roleRepo = dataSource.getRepository(Role);
  const staffRoleRepo = dataSource.getRepository(StaffRole);
  const staffClassRepo = dataSource.getRepository(StaffClass);
  const enrollmentRepo = dataSource.getRepository(Enrollment);
  const invoiceRepo = dataSource.getRepository(Invoice);
  const holidayScheduleRepo = dataSource.getRepository(HolidaySchedule);
  const automatedReportRepo = dataSource.getRepository(AutomatedReport);

  // Kiểm tra dữ liệu của tất cả bảng quan trọng
  const counts = await Promise.all([
    discountRepo.count(),
    courseRepo.count(),
    classScheduleRepo.count(),
    classAriseRepo.count(),
    lessonRepo.count(),
    classDayRepo.count(),
    studentRepo.count(),
    testTypeRepo.count(),
    gradeRepo.count(),
    attendanceRepo.count(),
    staffRepo.count(),
    roleRepo.count(),
    staffRoleRepo.count(),
    staffClassRepo.count(),
    enrollmentRepo.count(),
    invoiceRepo.count(),
    holidayScheduleRepo.count(),
    automatedReportRepo.count(),
  ]);

  // Nếu bất kỳ bảng nào chưa có dữ liệu thì seed
  const anyTableEmpty = counts.some(count => count === 0);

  if (anyTableEmpty) {
    console.log('Một hoặc nhiều bảng trống, bắt đầu seed dữ liệu...');
    await seed(dataSource);
  } else {
    console.log('Tất cả bảng đều có dữ liệu, bỏ qua seed.');
  }

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000); // Đảm bảo NestJS lắng nghe ở cổng 5000
}
bootstrap();