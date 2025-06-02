import { DataSource } from 'typeorm';
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

export async function seed(dataSource: DataSource) {
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

   // 1. Giảm giá
  const discount1 = discountRepo.create({ type: 'Mùa hè', description: 'Giảm giá mùa hè năm 2024' });
  await discountRepo.save(discount1);

  // 2. Khóa học
  const course1 = courseRepo.create({ code: 'ENG-BASIC', name: 'Tiếng Anh Cơ Bản', tuition_rate: 1000, number_hour: 40, description: 'Khóa học tiếng Anh cơ bản' });
  await courseRepo.save(course1);

  // 3. Lịch học
  const schedule1 = classScheduleRepo.create({ code: 'LICH-SANG', description: 'Lịch học buổi sáng' });
  await classScheduleRepo.save(schedule1);

  // 4. Lớp học
  const class1 = classAriseRepo.create({
    code: 'LOP001',
    course: course1,
    class_schedule: schedule1,
    start_date: new Date('2024-09-01'),
    room: 'Phòng 101',
    branch: 'Chi nhánh chính',
  });
  await classAriseRepo.save(class1);

  // 5. Bài học
  const lesson1 = lessonRepo.create({ code: 'BH001', course: course1, number: 1, description: 'Bài học 1: Giới thiệu' });
  await lessonRepo.save(lesson1);

  // 6. Ngày học
  const classDay1 = classDayRepo.create({
    class: class1,
    lesson: lesson1,
    class_date: new Date('2024-09-02'),
    start_time: '09:00:00',
    end_time: '10:30:00',
    is_final: false,
    is_midterm: false,
    comment: 'Ngày học đầu tiên',
  });
  await classDayRepo.save(classDay1);

  // 7. Học viên
  const student1 = studentRepo.create({
    code: 'HV001',
    first_name: 'Nguyễn',
    last_name: 'Văn A',
    email_address: 'nguyenvana@example.com',
    phone_number: '0123456789',
    address: '123 Đường Chính',
    discount: discount1,
  });
  await studentRepo.save(student1);

  // 8. Loại bài kiểm tra
  const testType1 = testTypeRepo.create({ type: 'Giữa kỳ', description: 'Bài kiểm tra giữa kỳ' });
  await testTypeRepo.save(testType1);

  // 9. Điểm số
  const grade1 = gradeRepo.create({
    student: student1,
    class: class1,
    test_type: testType1,
    speaking: 85,
    listening: 90,
    reading_writing: 88,
    comment: 'Tiến bộ tốt',
  });
  await gradeRepo.save(grade1);

  // 10. Điểm danh
  const attendance1 = attendanceRepo.create({
    student: { code: student1.code },
    class: { code: class1.code },
    class_day: { id: classDay1.id },
    date: '2024-09-02',
    status: 'Có mặt',
    comment: 'Đúng giờ',
    home_work: 'Hoàn thành',
    attitude: 'Tốt',
  });
  await attendanceRepo.save(attendance1);

  // 11. Nhân viên
  const staff1 = staffRepo.create({
    code: 'NV001',
    first_name: 'Trần',
    last_name: 'Thị B',
    email_address: 'tranthib@example.com',
    phone_number: '0987654321',
    specialization: 'Giáo viên tiếng Anh',
  });
  await staffRepo.save(staff1);

  // 12. Vai trò
  const role1 = roleRepo.create({ role_name: 'Giáo viên' });
  await roleRepo.save(role1);

  // 13. Vai trò nhân viên
  const staffRole1 = staffRoleRepo.create({
    staff_id: staff1.id,
    role_id: role1.id,
  });
  await staffRoleRepo.save(staffRole1);

  // 14. Lớp nhân viên phụ trách
  const staffClass1 = staffClassRepo.create({
    staff_id: staff1.id,
    class_id: class1.id,
  });
  await staffClassRepo.save(staffClass1);

  // 15. Ghi danh
  const enrollment1 = enrollmentRepo.create({
    student: { code: student1.code },
    course: { code: course1.code },
    class_code: class1.code,
    enrollment_date: '2024-08-15',
  });
  await enrollmentRepo.save(enrollment1);

  // 16. Hóa đơn
  const invoice1 = invoiceRepo.create({
    enrollment: enrollment1,
    amount: 1000,
    payment_type: 'Thẻ tín dụng',
    description: 'Thanh toán học phí',
  });
  await invoiceRepo.save(invoice1);

  // 17. Lịch nghỉ lễ
  const holiday1 = holidayScheduleRepo.create({
    holiday_type: 'Ngày lễ quốc gia',
    start_date: new Date('2024-12-25T00:00:00'),
    end_date: new Date('2024-12-26T23:59:59'),
    description: 'Kỳ nghỉ Giáng sinh',
  });
  await holidayScheduleRepo.save(holiday1);

  // 18. Báo cáo tự động
  const report1 = automatedReportRepo.create({
    report_type: 'Hàng tháng',
    generated_date: '2024-12-01',
    details: 'Báo cáo hàng tháng về tiến độ học tập và điểm danh của học viên',
  });
  await automatedReportRepo.save(report1);

  console.log('Dữ liệu seed đã được chèn thành công!');
}