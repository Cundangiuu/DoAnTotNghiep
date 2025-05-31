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
export class AutomatedReport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  report_type: string;

  @Column({ type: 'date' })
  generated_date: string;

  @Column({ type: 'text' })
  details: string;
}
