import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique, OneToMany } from 'typeorm';
import { LopHoc } from './lop-hoc.entity';
import { BaiHoc } from './bai-hoc.entity';
import { DiemDanh } from './diem-danh.entity';

@Entity({ name: 'buoi_hoc' })
@Unique('buoi_hoc_duy_nhat', ['lopHoc', 'baiHoc']) // Ràng buộc UNIQUE(lop_id, bai_hoc_id)
export class BuoiHoc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'lop_id', type: 'int', nullable: true }) // Mặc dù là FK và phần của UNIQUE, schema gốc không ghi NOT NULL
  lopId: number;

  @ManyToOne(() => LopHoc, (lopHoc) => lopHoc.buoiHocs)
  @JoinColumn({ name: 'lop_id' })
  lopHoc: LopHoc;

  @Column({ name: 'bai_hoc_id', type: 'int' })
  baiHocId: number;

  @ManyToOne(() => BaiHoc, (baiHoc) => baiHoc.buoiHocs)
  @JoinColumn({ name: 'bai_hoc_id' })
  baiHoc: BaiHoc;

  @Column({ name: 'ngay_hoc', type: 'date', nullable: true })
  ngayHoc: Date;

  @Column({ name: 'gio_bat_dau', type: 'time' })
  gioBatDau: string;

  @Column({ name: 'gio_ket_thuc', type: 'time' })
  gioKetThuc: string;

  @Column({ name: 'la_buoi_cuoi', type: 'boolean', nullable: true, default: false })
  laBuoiCuoi: boolean;

  @Column({ name: 'la_kiem_tra', type: 'boolean', nullable: true, default: false })
  laKiemTra: boolean;

  @Column({ name: 'ghi_chu', type: 'text', nullable: true })
  ghiChu: string;

  @OneToMany(() => DiemDanh, (diemDanh) => diemDanh.buoiHoc)
  diemDanhs: DiemDanh[];
}