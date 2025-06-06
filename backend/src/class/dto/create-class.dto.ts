// create-class.dto.ts
import { IsArray, IsString, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class CreateClassDto {
  @IsNumber()
  course_id: number;

  @IsNumber()
  class_schedule_id: number;

  @IsDateString()
  start_date: string;

  @IsString()
  room: string;

  @IsString()
  branch: string;

  @IsOptional()
  @IsArray()
  staffIds?: number[];
}
