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
// import { Course } from './course.entity';
import { ClassSchedule } from './classSchedule.entity';
import { ClassDay } from './classDay.entity';
import { Attendance } from './attendance.entity';
import { Staff } from './staff.entity';
import { Grade } from './grade.entity';
import { Student } from './student.entity';
import { ClassARISE } from './classARISE.entity';
import { Lesson } from './lesson.entity';
import { Enrollment } from './enrollment.entity';

@Entity()
@Unique(['code'])
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  tuition_rate: number;

  @Column({ nullable: true })
  number_hour: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Lesson, (lesson) => lesson.course)
  lessons: Lesson[];

  @OneToMany(() => ClassARISE, (cls) => cls.course)
  classes: ClassARISE[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.course)
  enrollments: Enrollment[];
}