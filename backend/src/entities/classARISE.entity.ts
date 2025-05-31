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
@Unique(['code'])
export class ClassARISE {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  course_id: number;

  @Column()
  class_schedule_id: number;

  @Column({ type: 'date', nullable: true })
  start_date: string;

  @Column({ nullable: true })
  room: string;

  @Column({ nullable: true })
  branch: string;

  @ManyToOne(() => Course, (course) => course.classes)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @ManyToOne(() => ClassSchedule, (schedule) => schedule.classes)
  @JoinColumn({ name: 'class_schedule_id' })
  class_schedule: ClassSchedule;

  @OneToMany(() => ClassDay, (classDay) => classDay.class)
  classDays: ClassDay[];

  @OneToMany(() => Attendance, (attendance) => attendance.class)
  attendances: Attendance[];

  @OneToMany(() => Staff, (staff) => staff.classes)
  staffs: Staff[];

  @OneToMany(() => Grade, (grade) => grade.class)
  grades: Grade[];
}
