import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { VaiTro } from './vai-tro.entity';
import { LopHoc } from './lop-hoc.entity';

@Entity({ name: 'nhan_vien' })
export class NhanVien {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ma_nhan_vien', type: 'varchar', length: 50, unique: true }) // unique constraint: ma_nhan_vien_duy_nhat
  maNhanVien: string;

  @Column({ name: 'ho', type: 'varchar', length: 50 })
  ho: string;

  @Column({ name: 'ten', type: 'varchar', length: 50 })
  ten: string;

  @Column({ name: 'email', type: 'varchar', length: 100 })
  email: string;

  @Column({ name: 'so_dien_thoai', type: 'varchar', length: 15, nullable: true })
  soDienThoai: string;

  @Column({ name: 'chuyen_mon', type: 'varchar', length: 100, nullable: true })
  chuyenMon: string;

  @ManyToMany(() => VaiTro, (vaiTro) => vaiTro.nhanViens)
  @JoinTable({
    name: 'vai_tro_nhan_vien',
    joinColumn: { name: 'nhan_vien_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'vai_tro_id', referencedColumnName: 'id' },
  })
  vaiTros: VaiTro[];

  @ManyToMany(() => LopHoc, (lopHoc) => lopHoc.nhanViens)
  @JoinTable({
    name: 'phan_cong',
    joinColumn: { name: 'nhan_vien_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'lop_id', referencedColumnName: 'id' },
  })
  lopHocs: LopHoc[];
}