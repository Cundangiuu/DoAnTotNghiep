import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassARISE } from '../entities/classARISE.entity';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(ClassARISE)
    private classRepository: Repository<ClassARISE>,
  ) {}

  async generateClassCode(dateString: string): Promise<string> {
    const date = new Date(dateString);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yy = String(date.getFullYear()).slice(-2);
    const datePart = `${dd}${mm}${yy}`;

    const count = await this.classRepository.count({
    where: { start_date: new Date(dateString) },
    });


    const numberPart = String(count + 1).padStart(3, '0');
    return `CLA-${datePart}${numberPart}`;
  }

  async create(createClassDto: CreateClassDto) {
    const { start_date } = createClassDto;
    const code = await this.generateClassCode(start_date);

    const newClass = this.classRepository.create({
      ...createClassDto,
      code,
    });

    return this.classRepository.save(newClass);
  }

  findAll() {
    return this.classRepository.find({ relations: ['course', 'class_schedule'] });
  }

  async findOne(id: number) {
    const classData = await this.classRepository.findOne({
      where: { id },
      relations: ['course', 'class_schedule'],
    });
    if (!classData) throw new NotFoundException(`Class with ID ${id} not found`);
    return classData;
  }

  async update(id: number, dto: UpdateClassDto) {
    await this.findOne(id);
    await this.classRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const existing = await this.findOne(id);
    return this.classRepository.remove(existing);
  }
  
}
