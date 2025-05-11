import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LopHoc } from './lop-hoc.entity';

@Entity({ name: 'lich_hoc' })
export class LichHoc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ma_lich', type: 'varchar', length: 50, unique: true, nullable: true })
  maLich: string;

  @Column({ name: 'mo_ta', type: 'text', nullable: true })
  moTa: string;

  @OneToMany(() => LopHoc, (lopHoc) => lopHoc.lichHoc)
  lopHocs: LopHoc[];
}