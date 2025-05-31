import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  Unique,
  Index,
} from 'typeorm';
import { Course } from './course.entity';
import { ClassSchedule } from './classSchedule.entity';
import { ClassDay } from './classDay.entity';
import { Attendance } from './attendance.entity';
import { Staff } from './staff.entity';
import { Grade } from './grade.entity';
import { Student } from './student.entity';
// import { ClassTVMS } from './classTVMS.entity';
import { Lesson } from './lesson.entity';
import { Invoice } from './invoice.entity';
@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  student_id: number;

  @Column()
  course_id: number;

  @Column({ length: 50, nullable: true })
  class_code: string;

  @Column({ type: 'date' })
  enrollment_date: string;

  @ManyToOne(() => Student, (student) => student.enrollments)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => Course, (course) => course.enrollments)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @OneToMany(() => Invoice, (invoice) => invoice.enrollment)
  invoices: Invoice[];
}