import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { HocVien } from './hoc-vien.entity';
import { LopHoc } from './lop-hoc.entity';
import { BuoiHoc } from './buoi-hoc.entity';

@Entity({ name: 'diem_danh' })
export class DiemDanh {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'hoc_vien_id', type: 'int' })
  hocVienId: number;

  @ManyToOne(() => HocVien, (hocVien) => hocVien.diemDanhs)
  @JoinColumn({ name: 'hoc_vien_id' })
  hocVien: HocVien;

  @Column({ name: 'lop_id', type: 'int' }) // Denormalized but present in schema
  lopId: number;

  @ManyToOne(() => LopHoc, (lopHoc) => lopHoc.diemDanhs)
  @JoinColumn({ name: 'lop_id' })
  lopHoc: LopHoc;

  @Column({ name: 'buoi_hoc_id', type: 'int' })
  buoiHocId: number;

  @ManyToOne(() => BuoiHoc, (buoiHoc) => buoiHoc.diemDanhs)
  @JoinColumn({ name: 'buoi_hoc_id' })
  buoiHoc: BuoiHoc;

  @Column({ name: 'ngay', type: 'date' })
  ngay: Date;

  @Column({ name: 'trang_thai', type: 'varchar', length: 10, default: 'Present' })
  trangThai: string;

  @Column({ name: 'nhan_xet', type: 'text', nullable: true })
  nhanXet: string;

  @Column({ name: 'bai_tap_ve_nha', type: 'varchar', length: 50, nullable: true })
  baiTapVeNha: string;

  @Column({ name: 'thai_do', type: 'varchar', length: 50, nullable: true })
  thaiDo: string;
}