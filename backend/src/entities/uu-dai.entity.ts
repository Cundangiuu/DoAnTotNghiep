import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HocVien } from './hoc-vien.entity'; // Giả sử hoc-vien.entity.ts

@Entity({ name: 'uu_dai' })
export class UuDai {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'loai', type: 'varchar', length: 50, unique: true })
  loai: string;

  @Column({ name: 'mo_ta', type: 'text', nullable: true })
  moTa: string;

  @OneToMany(() => HocVien, (hocVien) => hocVien.uuDai)
  hocViens: HocVien[];
}