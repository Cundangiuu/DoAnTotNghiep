import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Import tất cả các entities từ thư mục './entities/'
import { UuDai } from './entities/uu-dai.entity';
import { HocVien } from './entities/hoc-vien.entity';
import { LoaiBaiKiemTra } from './entities/loai-bai-kiem-tra.entity';
import { KhoaHoc } from './entities/khoa-hoc.entity';
import { LichHoc } from './entities/lich-hoc.entity';
import { BaiHoc } from './entities/bai-hoc.entity';
import { LopHoc } from './entities/lop-hoc.entity';
import { BuoiHoc } from './entities/buoi-hoc.entity';
import { DiemSo } from './entities/diem-so.entity';
import { DiemDanh } from './entities/diem-danh.entity';
import { VaiTro } from './entities/vai-tro.entity';
import { NhanVien } from './entities/nhan-vien.entity';
import { GhiDanh } from './entities/ghi-danh.entity';
import { HoaDon } from './entities/hoa-don.entity';
import { LichNghi } from './entities/lich-nghi.entity';
import { BaoCaoTuDong } from './entities/bao-cao-tu-dong.entity';
// Giả sử bạn sẽ tạo các module riêng cho từng entity sau này
// import { HocVienModule } from './hoc-vien/hoc-vien.module'; // Ví dụ

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',          // Địa chỉ của PostgreSQL (hoặc IP của server nếu không phải localhost)
      port: 5432,                 // Cổng mặc định của PostgreSQL
      username: 'postgres',       // Tên người dùng PostgreSQL
      password: '1',   // Mật khẩu của người dùng PostgreSQL
      database: 'DoAnHeThongGiaoDuc',   // Tên cơ sở dữ liệu
      entities: [ // <-- THÊM TẤT CẢ CÁC ENTITIES VÀO ĐÂY
        UuDai,
        HocVien,
        LoaiBaiKiemTra,
        KhoaHoc,
        LichHoc,
        BaiHoc,
        LopHoc,
        BuoiHoc,
        DiemSo,
        DiemDanh,
        VaiTro,
        NhanVien,
        GhiDanh,
        HoaDon,
        LichNghi,
        BaoCaoTuDong,
      ],
      synchronize: true,          // Đảm bảo cơ sở dữ liệu được đồng bộ với các entity (chỉ dùng cho môi trường phát triển)
      // logging: true,           // Bỏ comment dòng này nếu muốn xem các câu lệnh SQL được TypeORM thực thi
    }),
    // Các module chức năng của bạn sẽ được thêm vào đây, ví dụ:
    // HocVienModule,
    // KhoaHocModule,
    // ...
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}