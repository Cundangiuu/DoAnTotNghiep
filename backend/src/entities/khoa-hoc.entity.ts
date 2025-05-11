import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BaiHoc } from './bai-hoc.entity';
import { LopHoc } from './lop-hoc.entity';
import { GhiDanh } from './ghi-danh.entity';

@Entity({ name: 'khoa_hoc' })
export class KhoaHoc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ma_khoa_hoc', type: 'varchar', length: 50, unique: true }) // unique constraint: ma_khoa_hoc_duy_nhat
  maKhoaHoc: string;

  @Column({ name: 'ten_khoa_hoc', type: 'varchar', length: 100 })
  tenKhoaHoc: string;

  @Column({ name: 'hoc_phi', type: 'int', nullable: true })
  hocPhi: number;

  @Column({ name: 'so_gio', type: 'int', nullable: true })
  soGio: number;

  @Column({ name: 'mo_ta', type: 'text', nullable: true })
  moTa: string;

  @OneToMany(() => BaiHoc, (baiHoc) => baiHoc.khoaHoc)
  baiHocs: BaiHoc[];

  @OneToMany(() => LopHoc, (lopHoc) => lopHoc.khoaHoc)
  lopHocs: LopHoc[];

  @OneToMany(() => GhiDanh, (ghiDanh) => ghiDanh.khoaHoc)
  ghiDanhs: GhiDanh[];
}