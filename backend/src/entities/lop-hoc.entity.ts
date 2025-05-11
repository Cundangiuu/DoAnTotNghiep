import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { KhoaHoc } from './khoa-hoc.entity';
import { LichHoc } from './lich-hoc.entity';
import { DiemDanh } from './diem-danh.entity';
import { DiemSo } from './diem-so.entity';
import { BuoiHoc } from './buoi-hoc.entity';
import { NhanVien } from './nhan-vien.entity';

@Entity({ name: 'lop_hoc' })
export class LopHoc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ma_lop', type: 'varchar', length: 50, unique: true }) // unique constraint: ma_lop_duy_nhat
  maLop: string;

  @Column({ name: 'khoa_hoc_id', type: 'int' })
  khoaHocId: number;

  @ManyToOne(() => KhoaHoc, (khoaHoc) => khoaHoc.lopHocs)
  @JoinColumn({ name: 'khoa_hoc_id' })
  khoaHoc: KhoaHoc;

  @Column({ name: 'lich_hoc_id', type: 'int' })
  lichHocId: number;

  @ManyToOne(() => LichHoc, (lichHoc) => lichHoc.lopHocs)
  @JoinColumn({ name: 'lich_hoc_id' })
  lichHoc: LichHoc;

  @Column({ name: 'ngay_bat_dau', type: 'date', nullable: true })
  ngayBatDau: Date;

  @Column({ name: 'phong_hoc', type: 'varchar', length: 50, nullable: true })
  phongHoc: string;

  @Column({ name: 'co_so', type: 'varchar', length: 50, nullable: true })
  coSo: string;

  @OneToMany(() => DiemDanh, (diemDanh) => diemDanh.lopHoc)
  diemDanhs: DiemDanh[];

  @OneToMany(() => DiemSo, (diemSo) => diemSo.lopHoc)
  diemSos: DiemSo[];

  @OneToMany(() => BuoiHoc, (buoiHoc) => buoiHoc.lopHoc)
  buoiHocs: BuoiHoc[];

  @ManyToMany(() => NhanVien, (nhanVien) => nhanVien.lopHocs)
  // JoinTable được định nghĩa trên NhanVien cho bảng 'phan_cong'
  nhanViens: NhanVien[];
}