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
@Entity()
export class StaffClass {
  @PrimaryColumn()
  staff_id: number;

  @PrimaryColumn()
  class_id: number;
}