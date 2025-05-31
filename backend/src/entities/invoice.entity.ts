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
import { Enrollment } from './enrollment.entity';
import { Lesson } from './lesson.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  enrollment_id: number;

  @Column()
  amount: number;

  @Column({ nullable: true })
  payment_type: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => Enrollment, (enrollment) => enrollment.invoices)
  @JoinColumn({ name: 'enrollment_id' })
  enrollment: Enrollment;
}