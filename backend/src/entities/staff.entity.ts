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
// import { Staff } from './staff.entity';
import { Grade } from './grade.entity';
import { Student } from './student.entity';
import { ClassARISE } from './classARISE.entity';
import { Role } from './role.entity';

@Entity()
@Unique(['code'])
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email_address: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ nullable: true })
  specialization: string;

  @ManyToMany(() => Role, (role) => role.staffs)
  @JoinTable({
    name: 'staff_role',
    joinColumn: { name: 'staff_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
  })
  roles: Role[];

  @ManyToMany(() => ClassARISE, (cls) => cls.staffs)
  @JoinTable({
    name: 'staff_class',
    joinColumn: { name: 'staff_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'class_id', referencedColumnName: 'id' },
  })
  classes: ClassARISE[];
}