import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LessonsService {
    constructor(
        @InjectRepository(Lesson) 
        private lessonRepository: Repository<Lesson>) { };

    create(createLessonDto: CreateLessonDto): Promise<Lesson> {
        return this.lessonRepository.save(createLessonDto);
    }

    findAll() {
        return `This action returns all lessons`;
    }

    findOne(id: number) {
        return `This action returns a #${id} lesson`;
    }

    update(id: number, updateLessonDto: UpdateLessonDto) {
        return `This action updates a #${id} lesson`;
    }

    remove(id: number) {
        return `This action removes a #${id} lesson`;
    }
}
