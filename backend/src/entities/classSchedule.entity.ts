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
// import { ClassSchedule } from './classSchedule.entity';
import { ClassDay } from './classDay.entity';
import { Attendance } from './attendance.entity';
import { Staff } from './staff.entity';
import { Grade } from './grade.entity';
import { Student } from './student.entity';
import { ClassARISE } from './classARISE.entity';
import { Lesson } from './lesson.entity';

@Entity()
@Unique(['code'])
export class ClassSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => ClassARISE, (cls) => cls.class_schedule)
  classes: ClassARISE[];
}