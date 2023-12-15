import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';
import { Evaluation } from 'src/evaluations/entities/evaluation.entity';
import { CreateEvaluationDto } from 'src/evaluations/dto/create-evaluation.dto';

@Injectable()
export class LessonsService {
    constructor(
        @InjectRepository(Lesson)
        private lessonRepository: Repository<Lesson>,
    ) {}

    create(createLessonDto: CreateLessonDto): Promise<Lesson> {
        return this.lessonRepository.save(createLessonDto);
    }

    findAll() {
        return this.lessonRepository
            .createQueryBuilder('lesson')
            .leftJoinAndSelect('lesson.evaluations', 'evaluation')
            .leftJoinAndSelect('evaluation.user', 'user')
            .getMany();
    }

    findOne(id: number) {
        return this.lessonRepository.findOneBy({ id: id });
    }

    update(id: number, updateLessonDto: UpdateLessonDto) {
        return this.lessonRepository
            .createQueryBuilder()
            .update(Lesson) // Замените "User" на вашу сущность пользователя
            .set(updateLessonDto) // Используйте метод set для указания обновленных значений
            .where('id = :id', { id })
            .execute();
    }

    remove(id: number) {
        return this.lessonRepository.delete(id);
    }
}
