import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { HocVien } from './hoc-vien.entity';
import { KhoaHoc } from './khoa-hoc.entity';
import { HoaDon } from './hoa-don.entity';

@Entity({ name: 'ghi_danh' })
export class GhiDanh {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'hoc_vien_id', type: 'int', nullable: true })
  hocVienId: number;

  @ManyToOne(() => HocVien, (hocVien) => hocVien.ghiDanhs)
  @JoinColumn({ name: 'hoc_vien_id' })
  hocVien: HocVien;

  @Column({ name: 'khoa_hoc_id', type: 'int', nullable: true })
  khoaHocId: number;

  @ManyToOne(() => KhoaHoc, (khoaHoc) => khoaHoc.ghiDanhs)
  @JoinColumn({ name: 'khoa_hoc_id' })
  khoaHoc: KhoaHoc;

  @Column({ name: 'ma_lop', type: 'varchar', length: 50, nullable: true })
  maLop: string; // Mã lớp học (tham chiếu đến LopHoc.ma_lop)

  @Column({ name: 'ngay_ghi_danh', type: 'date' })
  ngayGhiDanh: Date;

  @OneToMany(() => HoaDon, (hoaDon) => hoaDon.ghiDanh)
  hoaDons: HoaDon[];
}
