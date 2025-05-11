import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { NhanVien } from './nhan-vien.entity';

@Entity({ name: 'vai_tro' })
export class VaiTro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ten_vai_tro', type: 'varchar', length: 50, unique: true })
  tenVaiTro: string;

  @ManyToMany(() => NhanVien, (nhanVien) => nhanVien.vaiTros)
  // JoinTable được định nghĩa trên NhanVien
  nhanViens: NhanVien[];
}