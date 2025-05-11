import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DiemSo } from './diem-so.entity';

@Entity({ name: 'loai_bai_kiem_tra' })
export class LoaiBaiKiemTra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ten_loai', type: 'varchar', length: 250, unique: true })
  tenLoai: string;

  @Column({ name: 'mo_ta', type: 'text', nullable: true })
  moTa: string;

  @OneToMany(() => DiemSo, (diemSo) => diemSo.loaiBaiKiemTra)
  diemSos: DiemSo[];
}
