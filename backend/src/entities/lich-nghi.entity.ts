import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'lich_nghi' })
export class LichNghi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'loai_nghi', type: 'varchar', length: 50 })
  loaiNghi: string;

  @Column({ name: 'ngay_bat_dau', type: 'timestamp' })
  ngayBatDau: Date;

  @Column({ name: 'ngay_ket_thuc', type: 'timestamp' })
  ngayKetThuc: Date;

  @Column({ name: 'mo_ta', type: 'text', nullable: true })
  moTa: string;
}