import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { CreateEvaluationDto } from 'src/evaluations/dto/create-evaluation.dto';
import { EvaluationsService } from 'src/evaluations/evaluations.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Lesson } from './entities/lesson.entity';

@ApiTags('lessons')
@Controller('lessons')
export class LessonsController {
    constructor(
        private readonly lessonsService: LessonsService,
        private readonly evaluationService: EvaluationsService
    ) { }

    @ApiOperation({ summary: 'Создать занятие' })
    @ApiResponse({ status: 201 })
    @Post()
    create(
        @Body() createLessonDto: CreateLessonDto) {
        return this.lessonsService.create(createLessonDto);
    }

    @ApiOperation({ summary: 'Добавить оценку за занятие' })
    @ApiResponse({ status: 201 })
    @Post(':id/evaluations')
    create_evaluation(
        @Param('id') id: string,
        @Body() createEvaluationDto: CreateEvaluationDto) {
        return this.evaluationService.create(+id, createEvaluationDto)
    }

    @ApiOperation({ summary: 'Получить список занятий с оценками пользователей' })
    @ApiResponse({ status: 200 })
    @Get()
    findAll() {
        return this.lessonsService.findAll();
    }

    // @Get(':id')
    // findOne(
    //     @Param('id') id: string) {
    //     return this.lessonsService.findOne(+id);
    // }

    // @Patch(':id')
    // update(
    //     @Param('id') id: string,
    //     @Body() updateLessonDto: UpdateLessonDto) {
    //     return this.lessonsService.update(+id, updateLessonDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.lessonsService.remove(+id);
    // }
}
