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
// import { Attendance } from './attendance.entity';
import { Staff } from './staff.entity';
import { Grade } from './grade.entity';
import { Student } from './student.entity';
import { ClassARISE } from './classARISE.entity';
import { Lesson } from './lesson.entity';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  student_id: number;

  @Column()
  class_id: number;

  @Column()
  class_day_id: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ default: 'Present' })
  status: string;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @Column({ nullable: true })
  home_work: string;

  @Column({ nullable: true })
  attitude: string;

  @ManyToOne(() => Student, (student) => student.attendances)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => ClassARISE, (cls) => cls.attendances)
  @JoinColumn({ name: 'class_id' })
  class: ClassARISE;

  @ManyToOne(() => ClassDay, (classDay) => classDay.attendances)
  @JoinColumn({ name: 'class_day_id' })
  class_day: ClassDay;
}
