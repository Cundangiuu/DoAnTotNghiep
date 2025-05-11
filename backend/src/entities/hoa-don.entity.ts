import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { GhiDanh } from './ghi-danh.entity';

@Entity({ name: 'hoa_don' })
export class HoaDon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ghi_danh_id', type: 'int', nullable: true })
  ghiDanhId: number;

  @ManyToOne(() => GhiDanh, (ghiDanh) => ghiDanh.hoaDons)
  @JoinColumn({ name: 'ghi_danh_id' })
  ghiDanh: GhiDanh;

  @Column({ name: 'so_tien', type: 'int', nullable: true })
  soTien: number;

  @Column({ name: 'hinh_thuc_thanh_toan', type: 'varchar', length: 50, nullable: true })
  hinhThucThanhToan: string;

  @Column({ name: 'mo_ta', type: 'text', nullable: true })
  moTa: string;
}