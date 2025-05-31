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
export class StaffRole {
  @PrimaryColumn()
  staff_id: number;

  @PrimaryColumn()
  role_id: number;
}