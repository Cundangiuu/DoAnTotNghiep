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
import { TestType } from './testType.entity';
import { Student } from './student.entity';
import { ClassARISE } from './classARISE.entity';
import { Lesson } from './lesson.entity';

@Entity()
@Unique(['student_id', 'class_id', 'test_type_id'])
export class Grade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  student_id: number;

  @Column()
  class_id: number;

  @Column()
  test_type_id: number;

  @Column({ type: 'float', nullable: true })
  speaking: number;

  @Column({ type: 'float', nullable: true })
  listening: number;

  @Column({ type: 'float', nullable: true })
  reading_writing: number;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @ManyToOne(() => Student, (student) => student.grades)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => ClassARISE, (cls) => cls.grades)
  @JoinColumn({ name: 'class_id' })
  class: ClassARISE;

  @ManyToOne(() => TestType, (testType) => testType.grades)
  @JoinColumn({ name: 'test_type_id' })
  test_type: TestType;
}