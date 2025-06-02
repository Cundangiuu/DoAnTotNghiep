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
// import { ClassDay } from './classDay.entity';
import { Attendance } from './attendance.entity';
import { Staff } from './staff.entity';
import { Grade } from './grade.entity';
import { Student } from './student.entity';
import { ClassARISE } from './classARISE.entity';
import { Lesson } from './lesson.entity';

@Entity()
@Unique(['class_id', 'lesson_id'])
export class ClassDay {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  class_id: number;

  @Column()
  lesson_id: number;

  @Column({ type: 'date', nullable: true })
  class_date: Date;

  @Column({ type: 'time' })
  start_time: string;

  @Column({ type: 'time' })
  end_time: string;

  @Column({ default: false })
  is_final: boolean;

  @Column({ default: false })
  is_midterm: boolean;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @ManyToOne(() => ClassARISE, (cls) => cls.classDays)
  @JoinColumn({ name: 'class_id' })
  class: ClassARISE;

  @ManyToOne(() => Lesson, (lesson) => lesson.classDays)
  @JoinColumn({ name: 'lesson_id' })
  lesson: Lesson;

  @OneToMany(() => Attendance, (attendance) => attendance.class_day)
  attendances: Attendance[];
}