import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'bao_cao_tu_dong' })
export class BaoCaoTuDong {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'loai_bao_cao', type: 'varchar', length: 50 })
  loaiBaoCao: string;

  @Column({ name: 'ngay_tao', type: 'date' })
  ngayTao: Date;

  @Column({ name: 'chi_tiet', type: 'text', nullable: true })
  chiTiet: string;
}