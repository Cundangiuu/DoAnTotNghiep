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
// import { Lesson } from './lesson.entity';

@Entity()
@Unique(['code'])
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  course_id: number;

  @Column()
  number: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => Course, (course) => course.lessons)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @OneToMany(() => ClassDay, (classDay) => classDay.lesson)
  classDays: ClassDay[];
}