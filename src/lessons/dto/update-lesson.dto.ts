import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDto } from './create-lesson.dto';
import { ValidateNested } from '@nestjs/class-validator';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {
    @ValidateNested()
    readonly createLessonDto: CreateLessonDto;
}
