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
import { ClassARISE } from './classARISE.entity';
import { Lesson } from './lesson.entity';

@Entity()
export class HolidaySchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  holiday_type: string;

  @Column({ type: 'timestamp' })
  start_date: Date;

  @Column({ type: 'timestamp' })
  end_date: Date;

  @Column({ type: 'text', nullable: true })
  description: string;
}