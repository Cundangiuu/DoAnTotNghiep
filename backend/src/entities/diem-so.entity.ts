import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { HocVien } from './hoc-vien.entity';
import { LopHoc } from './lop-hoc.entity';
import { LoaiBaiKiemTra } from './loai-bai-kiem-tra.entity';

@Entity({ name: 'diem_so' })
@Unique('diem_duy_nhat', ['lopHoc', 'hocVien', 'loaiBaiKiemTra']) // Ràng buộc UNIQUE(lop_id, hoc_vien_id, loai_bai_kiem_tra_id)
export class DiemSo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'hoc_vien_id', type: 'int', nullable: true }) // FK nên có thể null nếu mối quan hệ cho phép
  hocVienId: number;

  @Column({ name: 'lop_id', type: 'int', nullable: true })
  lopId: number;

  @Column({ name: 'loai_bai_kiem_tra_id', type: 'int', nullable: true })
  loaiBaiKiemTraId: number;

  @ManyToOne(() => HocVien, (hocVien) => hocVien.diemSos)
  @JoinColumn({ name: 'hoc_vien_id' })
  hocVien: HocVien;

  @ManyToOne(() => LopHoc, (lopHoc) => lopHoc.diemSos)
  @JoinColumn({ name: 'lop_id' })
  lopHoc: LopHoc;

  @ManyToOne(() => LoaiBaiKiemTra, (loaiBaiKiemTra) => loaiBaiKiemTra.diemSos)
  @JoinColumn({ name: 'loai_bai_kiem_tra_id' })
  loaiBaiKiemTra: LoaiBaiKiemTra;

  @Column({ name: 'noi', type: 'float', nullable: true })
  noi: number;

  @Column({ name: 'nghe', type: 'float', nullable: true })
  nghe: number;

  @Column({ name: 'doc_viet', type: 'float', nullable: true })
  docViet: number;

  @Column({ name: 'nhan_xet', type: 'text', nullable: true })
  nhanXet: string;
}