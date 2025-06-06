import { IsOptional, IsEnum, IsString, IsDateString, IsArray, ArrayNotEmpty, ArrayUnique } from 'class-validator';

export class UpdateClassDto {
  @IsOptional()
  @IsEnum(['mới', 'đang diễn ra', 'kết thúc'])
  status?: 'mới' | 'đang diễn ra' | 'kết thúc';

  @IsOptional()
  @IsString()
  room?: string;

  @IsOptional()
  @IsDateString()
  start_date?: string;

  @IsOptional()
  class_schedule_id?: number;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  staffIds?: number[];
}
