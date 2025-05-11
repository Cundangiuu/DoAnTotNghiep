import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { UuDai } from './uu-dai.entity';
import { DiemSo } from './diem-so.entity';
import { DiemDanh } from './diem-danh.entity';
import { GhiDanh } from './ghi-danh.entity';

@Entity({ name: 'hoc_vien' })
export class HocVien {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ma_hoc_vien', type: 'varchar', length: 50, unique: true, nullable: true }) // ma_hoc_vien có thể null theo schema gốc, UNIQUE được thêm sau
  maHocVien: string;

  @Column({ name: 'ho', type: 'varchar', length: 50 })
  ho: string;

  @Column({ name: 'ten', type: 'varchar', length: 50 })
  ten: string;

  @Column({ name: 'ngay_sinh', type: 'date', nullable: true })
  ngaySinh: Date;

  @Column({ name: 'email', type: 'varchar', length: 100 })
  email: string;

  @Column({ name: 'so_dien_thoai', type: 'varchar', length: 15, nullable: true })
  soDienThoai: string;

  @Column({ name: 'dia_chi', type: 'varchar', length: 255, nullable: true })
  diaChi: string;

  @Column({ name: 'url_anh_dai_dien', type: 'text', nullable: true })
  urlAnhDaiDien: string;

  @Column({ name: 'uu_dai_id', type: 'int', nullable: true })
  uuDaiId: number;

  @ManyToOne(() => UuDai, (uuDai) => uuDai.hocViens, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'uu_dai_id' })
  uuDai: UuDai;

  @OneToMany(() => DiemSo, (diemSo) => diemSo.hocVien)
  diemSos: DiemSo[];

  @OneToMany(() => DiemDanh, (diemDanh) => diemDanh.hocVien)
  diemDanhs: DiemDanh[];

  @OneToMany(() => GhiDanh, (ghiDanh) => ghiDanh.hocVien)
  ghiDanhs: GhiDanh[];
}