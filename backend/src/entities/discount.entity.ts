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

@Entity()
export class Discount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  type: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Student, (student) => student.discount)
  students: Student[];
}