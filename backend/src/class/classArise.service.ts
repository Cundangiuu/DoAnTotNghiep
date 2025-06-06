import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassARISE } from '../entities/classARISE.entity';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Staff } from '../entities/staff.entity';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(ClassARISE)
    private classRepository: Repository<ClassARISE>,
    @InjectRepository(Staff)
    private staffRepository: Repository<Staff>,
  ) {}

  async generateClassCode(dateString: string): Promise<string> {
  const date = new Date(dateString);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yy = String(date.getFullYear()).slice(-2);
  const datePart = `${dd}${mm}${yy}`;

  let index = 1;
  let code: string;

  while (true) {
    const numberPart = String(index).padStart(3, '0');
    code = `CLA-${datePart}${numberPart}`;

    const existing = await this.classRepository.findOne({ where: { code } });
    if (!existing) break;

    index++;
  }

  return code;
}


  async create(createClassDto: CreateClassDto) {
    const { start_date, staffIds, ...rest } = createClassDto;

    const code = await this.generateClassCode(start_date);

    // Lấy danh sách staff theo danh sách id
    const staffs = await this.staffRepository.findByIds(staffIds || []);

    if (staffIds && staffs.length !== staffIds.length) {
      throw new NotFoundException('Some staff IDs are invalid');
    }

    const newClass = this.classRepository.create({
      ...rest,
      start_date: new Date(start_date),
      code,
      staffs,
    });

    try {
      return await this.classRepository.save(newClass);
    } catch (error) {
      console.error('Error saving class:', error);
      throw error;
    }
  }

  findAll() {
    return this.classRepository.find({
      relations: ['course', 'class_schedule', 'staffs', 'classDays'],
    });
  }

  async findOne(id: number) {
        const classData = await this.classRepository.findOne({
          where: { id },
          relations: ['course', 'class_schedule', 'staffs', 'classDays'],
        });
        if (!classData) throw new NotFoundException(`Class with ID ${id} not found`);
        return classData;
      }

      async update(id: number, dto: UpdateClassDto) {
      // Kiểm tra lớp có tồn tại
      const existingClass = await this.findOne(id);

      // Nếu có staffIds, lấy entities tương ứng và gán lại dto.staffs
      if (dto.staffIds) {
        const staffs = await this.staffRepository.findByIds(dto.staffIds);
        if (staffs.length !== dto.staffIds.length) {
          throw new NotFoundException('Some staff IDs are invalid');
        }
        (dto as any).staffs = staffs;
        delete (dto as any).staffIds;
      }

      // Cập nhật các trường trong bảng ClassARISE
      // Lưu ý start_date cần convert sang Date nếu có
      if (dto.start_date) {
        (dto as any).start_date = new Date(dto.start_date);
      }

      await this.classRepository.update(id, dto);

      // Trả về class đã update với các relation
      return this.findOne(id);
    }


  async remove(id: number) {
    const existing = await this.findOne(id);
    return this.classRepository.remove(existing);
  }
}
