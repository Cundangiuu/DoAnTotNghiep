import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { KhoaHoc } from './khoa-hoc.entity';
import { BuoiHoc } from './buoi-hoc.entity';

@Entity({ name: 'bai_hoc' })
export class BaiHoc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ma_bai_hoc', type: 'varchar', length: 50, unique: true }) // unique constraint: ma_bai_hoc_duy_nhat
  maBaiHoc: string;

  @Column({ name: 'khoa_hoc_id', type: 'int' })
  khoaHocId: number;

  @ManyToOne(() => KhoaHoc, (khoaHoc) => khoaHoc.baiHocs)
  @JoinColumn({ name: 'khoa_hoc_id' })
  khoaHoc: KhoaHoc;

  @Column({ name: 'so_thu_tu', type: 'int' })
  soThuTu: number;

  @Column({ name: 'mo_ta', type: 'text', nullable: true })
  moTa: string;

  @OneToMany(() => BuoiHoc, (buoiHoc) => buoiHoc.baiHoc)
  buoiHocs: BuoiHoc[];
}