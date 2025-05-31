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
import { ClassARISE } from './classARISE.entity';
import { Lesson } from './lesson.entity';
import { Discount } from './discount.entity';
import { Enrollment } from './enrollment.entity'
@Entity()
@Unique(['code'])
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  code: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ type: 'date', nullable: true })
  date_of_birth: string;

  @Column()
  email_address: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'text', nullable: true })
  avatar_url: string;

  @ManyToOne(() => Discount, (discount) => discount.students, { nullable: true })
  @JoinColumn({ name: 'discount_id' })
  discount: Discount;

  @OneToMany(() => Grade, (grade) => grade.student)
  grades: Grade[];

  @OneToMany(() => Attendance, (attendance) => attendance.student)
  attendances: Attendance[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
  enrollments: Enrollment[];
}
